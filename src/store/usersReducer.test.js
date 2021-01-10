import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { axiosInstance } from '../api';
import usersReducer, {
  setUsersData,
  removeDeletedUser,
  getUsers,
  SET_USERS_DATA,
  initialState,
} from './usersReducer';
import { API_ADMIN_GET_USERS_ROUTE } from '../routes';

const mockStore = configureStore([thunk]);

const users = [
  {
    userId: 1,
    role: 'user',
    firstName: 'Test FN1',
    lastName: 'Test LN1',
    email: 'test@test.com',
    active: null,
    department: null,
    employedSince: null,
  },
  {
    userId: 2,
    role: 'user',
    firstName: 'Test FN2',
    lastName: 'Test LN2',
    email: 'test@test.com',
    active: null,
    department: null,
    employedSince: null,
  },
  {
    userId: 3,
    role: 'user',
    firstName: 'Test FN3',
    lastName: 'Test LN3',
    email: 'test@test.com',
    active: null,
    department: null,
    employedSince: null,
  },
];

describe('Users Reducer', () => {
  describe('Actions and Action Creators', () => {
    it('Should return default state', () => {
      const defaultState = usersReducer(initialState, {});
      expect(defaultState).toEqual(initialState);
    });

    it('Should set users on relevant action type', () => {
      const newState = usersReducer(initialState, setUsersData({ users }));
      expect(newState.list).toEqual(users);
    });

    it('Should remove user on relevant action type', () => {
      const oldState = {
        ...initialState,
        list: users,
      };
      const newState = usersReducer(oldState, removeDeletedUser(2));
      const oldUser = newState.list.filter((user) => user.userId === 2);
      expect(oldUser.length).toBe(0);
    });
  });

  describe('Thunks', () => {
    let mock;

    beforeAll(() => {
      mock = new MockAdapter(axiosInstance);
    });
    afterEach(() => {
      mock.reset();
    });

    afterAll(() => {
      mock.restore();
    });

    test('Should dispatch SET_USERS_DATA after users fetch', () => {
      const expectedData = users;
      const store = mockStore(initialState);

      mock.onGet(API_ADMIN_GET_USERS_ROUTE).reply(200, expectedData);

      return store.dispatch(getUsers()).then(() => {
        expect(store.getActions()).toContainEqual({
          type: SET_USERS_DATA,
          data: expectedData,
        });
      });
    });
  });
});
