export const LOCAL_STORAGE = 'pr-notify';

export const getObjectIndex = (array, object, key) => {
  if (!array.length) return -1;

  return array.map(item => item[key]).indexOf(object[key]);
};

export const without = (index, array) => {
  if (typeof index !== 'number' || array.length === 0) return array;
  return [].concat(array.slice(0, index), array.slice((index + 1), array.length));
};

export const saveToLocalStorage = (key, collection) => {
  const ls = JSON.parse(localStorage[LOCAL_STORAGE]);
  ls[key] = collection;
  localStorage[LOCAL_STORAGE] = JSON.stringify(ls);
};

export const getFromLocalStorage = (key) => {
  if (!localStorage[LOCAL_STORAGE]) return undefined;

  const ls = JSON.parse(localStorage[LOCAL_STORAGE]);
  const result = ls[key];
  return result;
};
