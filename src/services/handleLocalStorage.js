export const setStorage = (name, obj) => {
  localStorage.setItem(name, JSON.stringify(obj));
};

export const getStorage = (name) => {
  const result = localStorage.getItem(name);
  return JSON.parse(result);
};
