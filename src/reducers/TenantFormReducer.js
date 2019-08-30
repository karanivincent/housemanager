import {
  TENANT_UPDATE,
  TENANT_CREATE,
  TENANT_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  ID: '',
  house: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TENANT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case TENANT_CREATE:
      return INITIAL_STATE;
    case TENANT_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
