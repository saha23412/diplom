import { User } from '../global-types/user-types';

type UserCheck = Omit<User, 'user_id' | 'responsibility_storage'>;

const checkUser = (userCheck: UserCheck, users: User[]): boolean => {
  return !!users.find((user) => user.email === userCheck.email);
};
export default checkUser;
