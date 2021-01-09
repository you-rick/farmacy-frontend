import React from 'react';
import { shallow } from 'enzyme';
import { testStore } from '../../../../utils/testing';
import Notification from './Notification';

const props = {
  type: 'info',
  msg: 'test message',
  hideDuration: null,
  hideNote: () => null,
};

const setUp = (initState = {}) => {
  const store = testStore({});
  return shallow(<Notification store={store} {...initState} />).dive();
};

describe('Notification Component', () => {
  describe('with Message', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp(props);
    });

    it('Should render', () => {
      expect(wrapper.length)
        .toBe(1);
    });

    it('Should have message from props', () => {
      const alert = wrapper.find('Alert').dive();
      expect(alert.text()).toEqual(props.msg);
    });

    it('Should have severity from props', () => {
      const alertSeverity = wrapper.find('Alert').at(0).props().severity;
      expect(alertSeverity).toEqual(props.type);
    });
  });

  describe('without Message', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({
        ...props,
        type: '',
        msg: '',
      });
    });

    it('Should NOT render', () => {
      const alert = wrapper.find('Alert');
      expect(alert.length).toBe(0);
    });
  });
});
