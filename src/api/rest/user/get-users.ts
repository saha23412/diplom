import type { AxiosResponse } from 'axios';
import { User } from '../../../global-types/user-types';
import api from '../../create-api';

const getUsersApi = (): Promise<AxiosResponse<User[]>> => {
  return api({
    url: 'user',
    method: 'GET',
  });
};

export default getUsersApi;
