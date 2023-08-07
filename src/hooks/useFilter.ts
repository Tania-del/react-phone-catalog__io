export const useFilter = () => {
  const getSort = () => {
    const params = new URLSearchParams(document.location.search);

    // console.log(params.get('sort') ?? '');

    return params.get('sort') ?? '';
  };

  const getLimit = () => {
    const params = new URLSearchParams(document.location.search);

    // console.log(params.get('limit'));

    return params.get('limit') ?? '';
  };

  const getQuery = () => {
    const params = new URLSearchParams(document.location.search);

    // console.log(params.get('query'));

    return params.get('query' ?? '');
  };

  return {
    getSort,
    getLimit,
    getQuery,
  };
};
