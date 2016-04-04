import {assert} from 'chai';
import sinon from 'sinon';
import {
  messageParse,
  outbound,
  publicInbound,
  setSlackIncomingPath,
  setSlackOutgoingToken,
  setQueue,
  getQueue
} from '../../../src/server/messages';
import Response from 'hapi/lib/response';

describe('Messages I/O', () => {
  function mockHapiHandler(payload) {
    return [
      {payload},
      () => sinon.createStubInstance(Response)
    ];
  }

  beforeEach(() => {
    setSlackIncomingPath('/mock-slack-endpoint');
    setSlackOutgoingToken('slack-mock-token');
    setQueue([]);
  });

  afterEach(() => {
    setSlackIncomingPath();
    setSlackOutgoingToken();
  });

  it('should parse an incoming Slack message', () => {
    const msg = messageParse('q t0k3n Some Message');

    assert.equal(msg.token, 't0k3n');
    assert.equal(msg.message, 'Some Message');
  });

  it('should parse an incoming Slack message with multiple lines', () => {
    const msg = messageParse('q t0k3n Some Message\nwith multiple lines');

    assert.equal(msg.token, 't0k3n');
    assert.equal(msg.message, 'Some Message\nwith multiple lines');
  });

  it('should persist an incoming Slack message into the queue', () => {
    outbound.apply(null, mockHapiHandler({
      token: 'slack-mock-token', text: 'q t0k3n Test Message'
    }));

    const queue = getQueue();

    assert.equal(queue.length, 1);
    assert.equal(queue[0].name, 'Matt');
    assert.equal(queue[0].token, 't0k3n');
    assert.equal(queue[0].message, 'Test Message');
  });

  it('should not return anything on invalid relay token', () => {
    outbound.apply(null, mockHapiHandler({
      token: 'slack-mock-token', text: 'q t0k3n Test Message'
    }));

    assert.equal(getQueue().length, 1);

    publicInbound({
      payload: {
        token: 'non-token'
      }
    }, (response) => {
      // validate response
      assert.deepEqual(response.data, []);

      // queue should not contain these items
      return sinon.createStubInstance(Response);
    });

    assert.equal(getQueue().length, 1);
  });

  it('should relay message and remove it from queue', () => {
    outbound.apply(null, mockHapiHandler({
      token: 'slack-mock-token', text: 'q t0k3n Test Message'
    }));
    outbound.apply(null, mockHapiHandler({
      token: 'slack-mock-token', text: 'q Rt0k3n4 Other String'
    }));
    outbound.apply(null, mockHapiHandler({
      token: 'slack-mock-token', text: 'q t0k3n Another String'
    }));

    assert.equal(getQueue().length, 3);

    publicInbound({
      payload: {
        token: 't0k3n'
      }
    }, (response) => {
      // validate response
      assert.deepEqual(response.data, [
        {type: 'message', message: 'Test Message', name: 'Matt', token: 't0k3n'},
        {type: 'message', message: 'Another String', name: 'Matt', token: 't0k3n'}
      ]);

      // queue should not contain these items
      return sinon.createStubInstance(Response);
    });

    const queue = getQueue();

    assert.equal(queue.length, 1);
    assert.equal(queue[0].message, 'Other String');
  });
});
