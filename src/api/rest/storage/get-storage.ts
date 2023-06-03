import type { AxiosResponse } from 'axios';
import api from '../../create-api';
import { Storage } from '../../../global-types/storage-types';

const getStorageApi = (): Promise<AxiosResponse<Storage[]>> => {
  return api({
    url: 'storage',
    method: 'GET',
  });
};

export default getStorageApi;
