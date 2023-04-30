import axios from 'axios';

export default ({
  url = '/',
  method = 'get',
  params = {},
  data = {},
  headers = {},
}) => {
  return axios({
    baseURL: 'https://644bcc1e4bdbc0cc3a9acfcc.mockapi.io/',
    url,
    method,
    params,
    headers,
    data,
  });
};
