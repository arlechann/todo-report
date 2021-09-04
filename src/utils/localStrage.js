export const saveLocalStorageMiddleware = key => {
  return state => {
    localStorage.setItem(key, JSON.stringify(state));
    return state;
  };
};

export const loadLocalStorage = key => {
  return init => {
    return {
      ...init,
      ...JSON.parse(localStorage.getItem(key))
    };
  };
};

export const resetLocalStorege = key => {
  localStorage.removeItem(key);
}