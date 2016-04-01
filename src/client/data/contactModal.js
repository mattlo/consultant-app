export function modalReducer(state = {visibility: false}, action) {
  switch (action.type) {
    case 'SHOW_MODAL': return {visibility: true, context: action.context};
    case 'HIDE_MODAL': return {visibility: false, context: action.context};
    default: return state;
  }
}
