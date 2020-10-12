import { CALCULATE_INTEREST } from '../constants/ActionTypes';

export const calculateInterest = (principal, years, rate) => {
  return {
    type: CALCULATE_INTEREST,
    principal,
    years,
    rate,
  };
}
