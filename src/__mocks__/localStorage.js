const mockStorage = () => {
  const store = {};

  return {
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    getItem: (key) => store[key] || [],
  };
};

export const mockLocalStorage = mockStorage();
