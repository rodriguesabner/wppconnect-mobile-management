import ActionTypes from './action-types';

const getPermissions = () => {
  return {
    type: ActionTypes.app.PERMISSIONS,
    payload: true,
  };
};

export {getPermissions};
