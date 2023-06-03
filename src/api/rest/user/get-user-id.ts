import type { AxiosResponse } from 'axios';
import { User } from '../../../global-types/user-types';
import api from '../../create-api';

const getUserByIdApi = (user_id: string): Promise<AxiosResponse<User[]>> => {
  return api({
    url: `user?user_id=${user_id}`,
    method: 'GET',
  });
};

export default getUserByIdApi;
