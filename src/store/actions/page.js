import ActionTypes from './action-types';

const openModalAddUser = () => {
  return {
    type: ActionTypes.app.MODAL_ADD_USER_OPEN,
    payload: true,
  };
};

const closeModalAddUser = () => {
  return {
    type: ActionTypes.app.MODAL_ADD_USER_CLOSE,
    payload: false,
  };
};

export {openModalAddUser, closeModalAddUser};
