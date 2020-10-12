import { CALCULATE_INTEREST } from '../constants/ActionTypes';

export default function total(state = 0, action) {
  switch (action.type) {
    case CALCULATE_INTEREST:
      return action.principal * (1 + (action.rate * action.years));
    default:
      return state;
  }
}
