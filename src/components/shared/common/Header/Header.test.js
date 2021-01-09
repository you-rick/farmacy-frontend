import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr } from '../../../../utils/testing';
import Header from './Header';

describe('Header Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('Should render without errors', () => {
    const header = findByDataTestAttr(wrapper, 'HeaderComponent');
    expect(header.length)
      .toBe(1);
  });

  it('Should have a .logo element', () => {
    const logo = wrapper.find('.logo');
    expect(logo.length)
      .toBe(1);
  });
});
