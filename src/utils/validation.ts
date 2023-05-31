export const validationCheck = (
  data: { [key: string]: string },
  rules: {
    [key: string]: RegExp;
  }
): boolean => {
  if (Object.keys(data).length === Object.keys(rules).length) {
    for (let key in rules) {
      if (!rules[key].test(data[key])) {
        return false;
      }
    }
  }
  return true;
};
