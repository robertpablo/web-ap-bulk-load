import moment from 'moment';

export const arrayToString = (arr: any): string => {
  let str = '';
  if (arr != null) {
    arr.forEach((i: any, index: any) => {
      str += i;
      if (index != arr.length - 1) {
        str += ',';
      }
    });
  }
  return str;
};

export const isConstructor = (f: any) => {
  try {
    Reflect.construct(String, [], f);
  } catch (e) {
    return false;
  }
  return true;
};

export const isValidObject = (obj: any) => {
  return (
    typeof obj === 'object' &&
    obj &&
    !Array.isArray(obj) &&
    !moment.isMoment(obj) &&
    isConstructor(obj.constructor)
  );
};
