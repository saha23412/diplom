import { User } from '../global-types/user-types';

type UserCheck = Pick<User, 'email' | 'password'>;
const checkLogin = (userCheck: UserCheck, users: User[]) => {
  const userResult = users.find(
    (user) =>
      user.email === userCheck.email && user.password === userCheck.password
  );
  return userResult;
};

export default checkLogin;
