type Options = {
  expires?: Date | number | string;
  path?: string;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  samesite?: 'lax' | 'strict';
  'max-age'?: number;
};

const setCookie = (name: string, value: string, options?: Options) => {
  const settingOptions = options || {};
  let { expires } = settingOptions;
  if (typeof expires === 'number' && expires) {
    const data = new Date();
    data.setTime(data.getTime() + expires * 1000);
    expires = data;
    settingOptions.expires = data;
  }
  if (expires && (<Date>expires).toUTCString) {
    settingOptions.expires = (<Date>expires).toUTCString();
  }
  const cookieValue = encodeURIComponent(value);
  let updatedCookie = `${name}=${cookieValue}`;
  const settingOptionsValues = Object.values(settingOptions);
  const settingsOptionsKeys = Object.keys(settingOptions);
  for (let i = 0; i < settingOptionsValues.length; i += 1) {
    const propName = settingsOptionsKeys[i];
    updatedCookie += `; ${propName}`;
    const propValue = settingOptionsValues[i];
    if (propValue !== true) {
      updatedCookie += `=${propValue}`;
    }
  }
  document.cookie = updatedCookie;
};

export default setCookie;
