import { User } from '../global-types/user-types';

type UserCheck = Pick<User, 'email' | 'password'>;
export const checkLogin = (userCheck: UserCheck, users: User[]) => {
  const user = users.find(
    (user) =>
      user.email === userCheck.email && user.password === userCheck.password
  );
  return user;
};
