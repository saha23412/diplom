import { User } from '../../../global-types/user-types';
import api from '../../create-api';

const createUserApi = (data: User) => {
  return api({
    url: 'user',
    method: 'POST',
    data,
  });
};

export default createUserApi;
