enum STROAGES {
  access_token,
  refresh_token,
}

type Stroages = keyof typeof STROAGES;

export const setItemToLocal = (name: Stroages, data: string) => {
  localStorage.setItem(name, data);
};

export const setItemToSesstion = (name: Stroages, data: string) => {
  sessionStorage.setItem(name, data);
};

export const getItemToSesstion = (name: Stroages) =>
  sessionStorage.getItem(name);
export const getItemToLocal = (name: Stroages) => localStorage.getItem(name);

export const clearStorage = () => {
  localStorage.clear();
  sessionStorage.clear();
};
