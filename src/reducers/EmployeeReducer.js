import {
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITAL_STATE = {};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      console.log('EMPLOYEES_FETCH_SUCCESS', action);
      return action.payload;
    default:
      return state;
  }
};
