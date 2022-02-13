import ActionTypes from '../actions/action-types';
import Permissions from '../../utils/permissions';

const INITIAL_STATE = {
  permissions: new Permissions(),
};

const permissionsReducer = (state = INITIAL_STATE, {type, payload}: any) => {
  switch (type) {
    case ActionTypes.app.PERMISSIONS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export {permissionsReducer};
