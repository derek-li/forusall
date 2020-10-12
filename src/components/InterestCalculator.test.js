import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import InterestCalculator from './InterestCalculator';
import reducer from '../reducers';

const store = createStore(reducer);

describe('<InterestCalculator />', () => {
  const container = mount(
    <Provider store={store}>
      <InterestCalculator />
    </Provider>
  );

  // Tests for principal input
  it('should have a principal field', () => {
    expect(container.find('#principal').length).toEqual(1);
  });
  
  it('should set the principal value on change event', () => {
    expect(container.find('#principal').prop('value')).toEqual(0);
    container.find('#principal').simulate('change', {
      target: {
        value: 123,
      },
    });
    expect(container.find('#principal').prop('value')).toEqual(123);
  });

  // Tests for years input
  it('should have a years field', () => {
    expect(container.find('#years').length).toEqual(1);
  });

  it('should set the years value on change event', () => {
    expect(container.find('#years').prop('value')).toEqual(0);
    container.find('#years').simulate('change', {
      target: {
        value: 5,
      },
    });
    expect(container.find('#years').prop('value')).toEqual(5);
  });

  // Tests for rate input
  it('should have a rate field', () => {
    expect(container.find('#rate').length).toEqual(1);
  });

  it('should set the rate value on change event', () => {
    expect(container.find('#rate').prop('value')).toEqual(0);
    container.find('#rate').simulate('change', {
      target: {
        value: 0.025,
      },
    });
    expect(container.find('#rate').prop('value')).toEqual(0.025);
  });

  // Test for correct value after calculating the total
  it('should display the correct total after calculating', () => {
    // Check initial value
    expect(container.find('.total').text()).toEqual('Total: 0');

    // Set inputs to example input
    container.find('#principal').simulate('change', {
      target: {
        value: 5000,
      },
    });

    container.find('#years').simulate('change', {
      target: {
        value: 5,
      },
    });

    container.find('#rate').simulate('change', {
      target: {
        value: 0.025,
      },
    });

    container.find('button').simulate('click');
    expect(container.find('.total').text()).toEqual('Total: 5625'); // 5000 * (1 + (0.025 * 5)) = 5625
  });
});
