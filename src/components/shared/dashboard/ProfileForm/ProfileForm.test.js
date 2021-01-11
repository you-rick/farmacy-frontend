import React from 'react';
import { mount } from 'enzyme';
import { reduxForm } from 'redux-form';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { testStore, findByDataTestAttr } from '../../../../utils/testing';
import { ProfileFormInner } from './ProfileForm';
import { USER_RESET_PASSWORD_ROUTE } from '../../../../routes';
import { LOCALE } from '../../../../locale';
import validate from './validate';

const props = {
  user: {
    role: 'ROLE_USER',
    firstName: null,
    lastName: 'Test LN',
    email: 'test@test.com',
    phoneNumber: '+123456789',
    extension: null,
    mobileNumber: '+987654321',
  },
  handleSubmit: () => null,
  initialize: () => null,
};

const DecoratedForm = reduxForm({
  form: 'testForm',
  initialValues: { ...props.user },
  validate,
})(ProfileFormInner);

const setUp = (initProps = {}) => {
  const store = testStore();
  return mount(
    <BrowserRouter>
      <Provider store={store}>
        <DecoratedForm {...initProps} />
      </Provider>
    </BrowserRouter>,
  );
};

describe('Profile Redux Form Component', () => {
  let wrapper;
  let submitMockFn;

  beforeEach(() => {
    submitMockFn = jest.fn();
    wrapper = setUp({
      ...props,
      handleSubmit: submitMockFn,
    });
  });

  it('Should render form', () => {
    const form = wrapper.find('form');
    expect(form.length).toBe(1);
  });

  it('Should correctly initialize default form values', () => {
    const lastName = wrapper.find('input[name="lastName"]');
    const email = wrapper.find('input[name="email"]');

    expect(lastName.props().value).toEqual(props.user.lastName);
    expect(email.props().value).toEqual(props.user.email);
  });

  it('Should render user\'s resetPassPath if user.role is relevant', () => {
    const navLink = findByDataTestAttr(wrapper, 'resetPasswordLink');
    expect(navLink.first().props().to).toEqual(USER_RESET_PASSWORD_ROUTE);
  });

  it('Should emit callback on handleSubmit', () => {
    const form = wrapper.find('form');
    form.simulate('submit');
    const callback = submitMockFn.mock.calls.length;
    expect(callback).toBe(1);
  });

  it('Should validate correctly', () => {
    const form = wrapper.find('form');
    form.simulate('submit');
    const extensionFieldWrapper = wrapper.find('[name="extension"][syncError]');
    const firstNameFieldWrapper = wrapper.find('[name="firstName"][syncError]');

    expect(extensionFieldWrapper.props().syncError).toEqual(LOCALE.errors.validation.isNumber);
    expect(firstNameFieldWrapper.props().syncError).toEqual(LOCALE.errors.validation.required);
  });
});
