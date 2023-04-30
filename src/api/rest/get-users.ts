import { BASE_URL } from '../../constants/constants';
import makeRequest from '../make-request';

export const getUsers = () => {
  return makeRequest({
    url: `${BASE_URL}user`,
  });
};
