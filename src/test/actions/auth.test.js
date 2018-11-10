import { login, logout } from '../../actions/auth';

test('should generate set login action object', () => {
  const uid = 'XYZ123'
  const action = login(uid);
  expect(action).toEqual({
    type:'LOGIN',
    uid
  })
});

test('should generate set logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type:'LOGOUT'
  })
});