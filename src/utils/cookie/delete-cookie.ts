import setCookie from './set-cookie';

const deleteCookie = (name: string) => {
  setCookie(name, '', {
    'max-age': -1,
  });
};

export default deleteCookie;
