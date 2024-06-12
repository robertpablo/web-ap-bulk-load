import moment from 'moment';
import { arrayToString, isValidObject } from './string.helpers';

export const convertObjectToGetParams = (obj: any, keyParent: any = null) => {
  let resp: any = {};
  Object.keys(obj).forEach((k) => {
    const value = obj[k];
    const key = keyParent ? `${keyParent}.${k}` : k;

    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        resp[key] = arrayToString(value);
      } else if (isValidObject(value)) {
        const children = convertObjectToGetParams(value, key);
        resp = { ...resp, ...children };
      } else if (moment.isMoment(value)) {
        resp[key] = value.format('YYYY-MM-DD');
      } else {
        resp[key] = String(obj[k]);
      }
    }
  });
  return resp;
};
