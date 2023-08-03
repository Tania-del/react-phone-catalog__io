export const useFilter = () => {
  const getSort = () => {
    const params = new URLSearchParams(document.location.search);
    const sort = params.get('sort');

    // eslint-disable-next-line no-console
    console.log(sort);
  };

  return {
    getSort,
  };
};
