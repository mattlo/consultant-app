import request from 'superagent-bluebird-promise';

export function modalReducer(state = {visibility: false}, action) {
  switch (action.type) {
    case 'SHOW_MODAL': return {visibility: true, context: action.context};
    case 'HIDE_MODAL': return {visibility: false, context: action.context};
    default: return state;
  }
}

export function messageReducer(state = [], action) {
  if (action.type === 'ADD_MESSAGES') {
    return [...state, ...action.messages];
  }

  return state;
}

export function getMessagesAction(token) {
  return dispatch => request
    .post('/api/public-inbound-message')
    .send({token})
    .then(res => {
      dispatch({
        type: 'ADD_MESSAGES',
        messages: res.body.data
      });
    })
    .catch(e => {
      console.error(e);
      // @TODO add error action handling
    });
}

export function sendMessageAction(payload) {
  return dispatch => request
    .post('/api/public-outbound-message')
    .send(payload)
    .then(() => {
      dispatch({
        type: 'ADD_MESSAGES',
        messages: [{
          ...payload,
          user: true
        }]
      });
    })
    .catch(e => {
      console.error(e);
      // @TODO add error action handling
    });
}
