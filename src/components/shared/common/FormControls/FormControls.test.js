import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { renderTextField } from './FormControls';

const errorText = 'Test Error';
const formHelper = (msg) => (<span id="testErrorMsg">{msg}</span>);

const props = {
  label: 'Test Label',
  input: {
    value: 'Test input',
  },
  meta: {
    touched: false,
    invalid: false,
    error: false,
  },
  classes: {
    root: 'testTextField',
  },
};
const propsWithError = {
  ...props,
  meta: {
    touched: true,
    invalid: true,
    error: formHelper(errorText),
  },
};

describe('renderTextField Form Helper', () => {
  let mount;
  let wrapper;

  beforeAll(() => {
    mount = createMount();
  });
  afterAll(() => {
    mount.cleanUp();
  });

  describe('Without form errors', () => {
    beforeEach(() => {
      wrapper = mount(renderTextField(props));
    });

    it('Should render', () => {
      expect(wrapper.length)
        .toBe(1);
    });

    it('Should have CSS class for root', () => {
      const container = wrapper.find('.testTextField');
      expect(container.length)
        .not
        .toBe(0);
    });

    it('Should render label text from props', () => {
      const label = wrapper.find('label');
      expect(label.text())
        .toEqual(props.label);
    });

    it('Should render placeholder text from props', () => {
      const input = wrapper.find('input');
      expect(input.at(0)
        .props().placeholder)
        .toEqual(props.label);
    });

    it('Should NOT have validation errors massages', () => {
      const errorMsg = wrapper.find('#testErrorMsg');
      expect(errorMsg.length)
        .toBe(0);
    });
  });

  describe('With form errors', () => {
    beforeEach(() => {
      wrapper = mount(renderTextField(propsWithError));
    });

    it('Should render', () => {
      expect(wrapper.length)
        .toBe(1);
    });

    it('Should have Mui error CSS class', () => {
      const errorCssClass = wrapper.find('.Mui-error');
      expect(errorCssClass.length)
        .not
        .toBe(0);
    });

    it('Should have custom Helper Text', () => {
      const errorMsg = wrapper.find('#testErrorMsg');
      expect(errorMsg.length)
        .toBe(1);
      expect(errorMsg.text())
        .toEqual(errorText);
    });
  });
});
