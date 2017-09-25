import { EMPLOYEE_UPDATE } from '../actions/types';

const INITAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
    // action.playload === { prop: 'name', value: 'jane'}
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
     return state;
  }
};
