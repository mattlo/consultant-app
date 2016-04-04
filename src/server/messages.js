import https from 'https';

let slackOutgoingToken = process.env.SLACK_OUTGOING_TOKEN || '';
let slackIncomingPath = process.env.SLACK_INCOMING_PATH;
let queue = [];
const MSG_PATTERN = /q\s(\w+)\s([\s\S]*)/;

/**
 * @param q
 */
export function setQueue(q) {
  queue = q;
}

/**
 * @returns {Array}
 */
export function getQueue() {
  return queue;
}

/**
 * @param v
 */
export function setSlackOutgoingToken(v) {
  slackOutgoingToken = v;
}

/**
 * @param v
 */
export function setSlackIncomingPath(v) {
  slackIncomingPath = v;
}

/**
 * Parses message
 * @param msg
 */
export function messageParse(msg) {
  const [, token, message] = msg.match(MSG_PATTERN);

  return {token, message};
}

/**
 * Message from Slack, adds token to publicInbound queue
 * @param req
 * @param res
 */
export function outbound(req, res) {
  // immediate response to public, regardless of error
  res({
    data: {
      type: 'message'
    }
  }).code(201);

  const data = req.payload;

  // validate payload
  if (data.token === slackOutgoingToken) {
    // parse message and queue it
    setQueue([...queue, {
      ...messageParse(data.text),
      name: 'Matt'
    }]);

    console.info('Slack message received');
  } else {
    console.warn('invalid Slack token on message request');
  }
}

/**
 * Client polls inbound requests, sends request data from queue
 *
 * @TODO messages can be brute forced and intercepted if they weren't received by the client
 * @param req
 * @param res
 */
export function publicInbound(req, res) {
  const token = req.payload.token || '';

  // extract data
  const data = queue.filter(msg => msg.token === token);

  // remove items
  setQueue(queue.filter(msg => msg.token !== token));

  res({
    data: data.map((row) => ({
      ...row || {},
      type: 'message'
    }))
  }).code(201);
}

/**
 * Sends user's response to Slack
 * @param req
 * @param res
 */
export function publicOutbound(req, res) {
  // immediate response to public, regardless of error
  res({
    data: {
      type: 'message'
    }
  }).code(201);

  const data = JSON.parse(req.payload);

  if (!slackIncomingPath) {
    console.error('SLACK_INCOMING_PATH needs to be defined as an environment variable');
    return;
  }

  // issue request
  console.info(`Sending slack request from: ${data.token} - ${data.name}`);
  const slackReq = https.request({
    host: 'hooks.slack.com',
    port: '443',
    path: `/services${slackIncomingPath}`,
    method: 'POST'
  }, () => {
  });

  slackReq.on('error', (e) => {
    console.error(e);
  });

  slackReq.write(JSON.stringify({
    text: `<@mlo> - *${data.token}* - ${data.name}: ${data.message}`
  }));

  slackReq.end();
}

setSlackOutgoingToken(process.env.SLACK_OUTGOING_TOKEN || '');
setSlackIncomingPath(process.env.SLACK_INCOMING_PATH);
