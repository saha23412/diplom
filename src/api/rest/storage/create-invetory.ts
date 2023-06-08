import { Storage } from '../../../global-types/storage-types';
import api from '../../create-api';

const createStorageApi = (data: Storage) => {
  return api({
    url: 'storage',
    method: 'POST',
    data,
  });
};

export default createStorageApi;
