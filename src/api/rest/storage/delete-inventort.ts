import type { AxiosResponse } from 'axios';
import api from '../../create-api';
import { Storage } from '../../../global-types/storage-types';

const deleteStorageApi = (id: string): Promise<AxiosResponse<Storage[]>> => {
  return api({
    url: `storage/${id}`,
    method: 'DELETE',
  });
};

export default deleteStorageApi;
