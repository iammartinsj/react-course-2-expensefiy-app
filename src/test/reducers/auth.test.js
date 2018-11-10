import AuthReducer from '../../reducers/auth';

test('should set login', () => {
  const action = {  
    type: 'LOGIN',
    uid: "XYZ123"
  };
  const state = AuthReducer(undefined, action);
  expect(state.uid).toEqual(action.uid);
});

test('should set logout', () => {
  const action = {  
    type: 'LOGOUT'
  };
  const state = AuthReducer({uia:'XYZ123'}, action);
  expect(state).toEqual({});
});