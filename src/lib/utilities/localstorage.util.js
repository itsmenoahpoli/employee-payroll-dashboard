export const localStorageSetItem = (data) => {
  localStorage.setItem(
    JSON.stringify({
      data,
    })
  );
};
