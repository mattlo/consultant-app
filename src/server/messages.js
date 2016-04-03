import https from 'https';

const slackOutgoingToken = process.env.SLACK_OUTGOING_TOKEN || '';
const slackIncomingPath = process.env.SLACK_INCOMING_PATH;
const queue = [];
const MSG_PATTERN = /q\s(\w+)\s(.*)/;

/**
 * Parses message
 * @param msg
 */
export function messsageParse(msg) {
  const [, token, message] = msg.match(MSG_PATTERN);
  const name = 'Matt';

  return {token, message, name};
}

/**
 * Message from Slack, adds token to publicInbound queue
 * @param req
 * @param res
 */
export function outbound(req, res) {
  console.log(req);

  // immediate response to public, regardless of error
  res({
    data: {
      type: 'message'
    }
  }).code(201);

  const data = JSON.parse(req.payload);

  // validate payload
  if (data.token === slackOutgoingToken) {
    // parse message and queue it
    queue.push(messsageParse(data.text));
    console.info('Slack message received');
  } else {
    console.warn('invalid Slack token on message request');
  }
}

/**
 * Client polls inbound requests, sends request data from queue
 * @param req
 * @param res
 */
export function publicInbound(req, res) {
  console.log(queue);

  res({
    data: {
      type: 'message'
    }
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
  }, () => {});

  slackReq.on('error', (e) => {
    console.error(e);
  });

  slackReq.write(JSON.stringify({
    text: `<@mlo> - *${data.token}* - ${data.name}: ${data.message}`
  }));

  slackReq.end();
}
