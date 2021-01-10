import notificationReducer, { setNote, hideNote, initialState } from './notificationReducer';

describe('Notification Reducer', () => {
  it('Should return default state', () => {
    const defaultState = notificationReducer(initialState, {});
    expect(defaultState).toEqual(initialState);
  });

  it('Should set note message', () => {
    const payload = { msg: 'Test msg' };
    const newState = notificationReducer(initialState, setNote(payload));
    expect(newState.msg).toEqual(payload.msg);
  });

  it('Should reset state on hideNote', () => {
    const state = {
      ...initialState,
      msg: 'Test msg',
    };
    const newState = notificationReducer(state, hideNote());
    expect(newState.msg).toEqual(initialState.msg);
  });
});
