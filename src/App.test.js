import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { AppContainer } from './App';
import { testStore, findByDataTestAttr } from './utils/testing';

const storeState = {
  auth: {
    userId: '1',
    isAuth: true,
    role: 'ROLE_USER',
    email: 'test@test.com',
  },
};

const props = {
  isDataFetching: false,
  initialized: true,
  isAuth: true,
  notification: {
    type: 'info',
    msg: '',
  },
  hideNote: () => null,
  initializeApp: () => null,
};

const setUp = (routerState = {}, initState = {}, storeData = storeState) => {
  const store = testStore(storeData);
  return mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={routerState}>
        <AppContainer {...initState} />
      </MemoryRouter>
    </Provider>,
  );
};

describe('App Component', () => {
  it('Should render Login page on / route if notAuth', () => {
    const wrapper = setUp(['/'], {
      ...props,
      isAuth: false,
    }, {
      ...storeState,
      auth: { isAuth: false },
    });
    const loginWrapper = wrapper.find('UserLoginContainer');
    expect(loginWrapper.length).toBe(1);
  });

  it('Should render User Dashboard on / route if isAuth', () => {
    const wrapper = setUp(['/'], props, storeState);
    const dashboardWrapper = wrapper.find('UserDashboardContainer');
    expect(dashboardWrapper.length).toBe(1);
  });

  it('Should render Loader if App is not initialized', () => {
    const wrapper = setUp(['/'], {
      ...props,
      initialized: false,
    }, storeState);

    const loader = wrapper.find('.spinnerWrap');
    expect(loader.length).toBe(1);
  });

  it('Should render NotFound page on wrong route', () => {
    const wrapper = setUp(['/test/test'], props, storeState);
    const notFoundPage = findByDataTestAttr(wrapper, 'NotFoundComponent');
    expect(notFoundPage.length).not.toBe(0);
  });

  it('Should NOT render Header, if user logged in', () => {
    const wrapper = setUp(['/'], props, storeState);
    const header = findByDataTestAttr(wrapper, 'HeaderComponent');
    expect(header.length).toBe(0);
  });
});
