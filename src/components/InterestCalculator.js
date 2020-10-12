import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateInterest } from '../actions';

export default function Form() {
  const [principal, setPrincipal] = useState(0);
  const [years, setYears] = useState(0);
  const [rate, setRate] = useState(0);

  const total = useSelector(state => state.total);
  const dispatch = useDispatch();
  

  const onPrincipalChanged = (e) => setPrincipal(e.target.value);
  const onYearsChanged = (e) => setYears(e.target.value);
  const onRateChanged = (e) => setRate(e.target.value);

  return (
    <section>
      <h2>Interest Rate Calculator</h2>
      <form className="interest-calculator">
        <label htmlFor="principal">Initial Investment:</label>
        <input
          type="number"
          id="principal"
          name="principal"
          value={principal}
          onChange={onPrincipalChanged}
        />
        <label htmlFor="years">Years:</label>
        <input
          type="number"
          id="years"
          name="rate"
          value={years}
          onChange={onYearsChanged}
        />
        <label htmlFor="rate">Rate:</label>
        <input
          type="number"
          id="rate"
          name="rate"
          value={rate}
          onChange={onRateChanged}
        />
        <button onClick={() => dispatch(calculateInterest(principal, years, rate))}>
          Calculate
        </button>
      </form>
      <h2 className="total">Total: {total}</h2>
    </section>
  )
}
