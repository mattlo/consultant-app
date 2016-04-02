export function inbound(req, res) {
  res({
    data: {
      type: 'message',
      attributes: {

      }
    }
  });
}

export function outbound(req, res) {
  console.log(req.payload);

  res({
    data: {
      type: 'message',
      attributes: {
        message: 'Hello'
      }
    }
  });
}
