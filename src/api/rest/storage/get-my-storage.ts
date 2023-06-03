import type { AxiosResponse } from 'axios';
import api from '../../create-api';
import { Storage } from '../../../global-types/storage-types';

const getMyStorageApi = (id: string): Promise<AxiosResponse<Storage[]>> => {
  return api({
    url: `storage?user_id=${id}`,
    method: 'GET',
  });
};

export default getMyStorageApi;
