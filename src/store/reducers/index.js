import {combineReducers} from 'redux';
import {appReducer} from './page';
import {permissionsReducer} from './permissions';

export default combineReducers({
  app: appReducer,
  permissions: permissionsReducer,
});
