import ActionTypes from '../actions/action-types';

const INITIAL_STATE = {
  open: false,
};

const appReducer = (state = INITIAL_STATE, {type, payload}: any) => {
  switch (type) {
    case ActionTypes.app.MODAL_ADD_USER_OPEN:
      return {
        ...state,
        open: payload,
      };
    case ActionTypes.app.MODAL_ADD_USER_CLOSE:
      return {
        ...state,
        open: payload,
      };
    default:
      return state;
  }
};

export {appReducer};
