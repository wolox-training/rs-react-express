const tempStorage = {};

const getEncodedFieldName = key =>
  window.btoa(`@@${'<%= projectName %>'.replace(/-/g, '_').toUpperCase()}:${key}`);

const getValue = key => {
  const encodedKey = getEncodedFieldName(key);
  let encodedValue = undefined;
  try {
    encodedValue = window.localStorage.getItem(encodedKey);
  } catch (e) {
    encodedValue = tempStorage[encodedKey];
  }
  const stringValue = encodedValue && window.atob(encodedValue);

  return stringValue && JSON.parse(stringValue);
};

const setValue = (key, value) => {
  const encodedKey = getEncodedFieldName(key);
  const stringValue = JSON.stringify(value);
  const encodedValue = window.btoa(stringValue);

  try {
    window.localStorage.setItem(encodedKey, encodedValue);
  } catch (e) {
    tempStorage[encodedKey] = encodedValue;
  }
};

const removeValue = key => {
  const encodedKey = getEncodedFieldName(key);
  try {
    window.localStorage.removeItem(encodedKey);
  } catch (e) {
    tempStorage[encodedKey] = undefined;
  }
};

export default {
  getValue,
  setValue,
  removeValue
};
