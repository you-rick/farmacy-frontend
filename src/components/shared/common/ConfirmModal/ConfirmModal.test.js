import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTestAttr } from '../../../../utils/testing';
import ConfirmModal from './ConfirmModal';

const setUp = (initState = {}) => shallow(<ConfirmModal {...initState} />);

describe('Confirm Modal', () => {
  let wrapper;
  const props = {
    headline: 'Test Headline',
    body: 'Test Body',
    open: false,
    onClose: () => null,
    onSubmit: () => null,
  };
  let submitMockFn;
  let cancelMockFn;

  beforeEach(() => {
    submitMockFn = jest.fn();
    cancelMockFn = jest.fn();

    props.onSubmit = submitMockFn;
    props.onClose = cancelMockFn;
    wrapper = setUp(props);
  });

  it('Should render without errors', () => {
    const modal = findByDataTestAttr(wrapper, 'ConfirmModalComponent');
    expect(modal.length)
      .toBe(1);
  });

  it('Should render Headline', () => {
    const headline = findByDataTestAttr(wrapper, 'ModalHeadline');
    expect(headline.text())
      .toEqual(props.headline);
  });

  it('Should render Body', () => {
    const body = findByDataTestAttr(wrapper, 'ModalBody');
    expect(body.text())
      .toEqual(props.body);
  });

  it('Should emit callback on Submit click', () => {
    const submit = findByDataTestAttr(wrapper, 'SubmitButton');
    submit.simulate('click');
    const callback = submitMockFn.mock.calls.length;
    expect(callback)
      .toBe(1);
  });

  it('Should emit callback on Cancel click', () => {
    const cancel = findByDataTestAttr(wrapper, 'CancelButton');
    cancel.simulate('click');
    const callback = cancelMockFn.mock.calls.length;
    expect(callback)
      .toBe(1);
  });
});
