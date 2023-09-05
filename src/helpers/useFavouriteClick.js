import {
  getLocalStorageItem,
  // removeLocalStorageItem,
  setLocalStorageItem,
} from './LocalStorageState';

export const useFavouriteClick = () => {
  const getFavourites = () => getLocalStorageItem('phoneId') || [];

  const isFavourite = (itemId) => {
    const favourites = getFavourites();

    return favourites.includes(itemId);
  };

  const handleFavouriteClick = (key, itemId) => {
    const favourites = getFavourites();

    if (!isFavourite(itemId)) {
      setLocalStorageItem(key, [...favourites, itemId]);
    } else {
      const removedItem = favourites.filter((current) => current !== itemId);

      setLocalStorageItem(key, removedItem);
    }
  };

  return { handleFavouriteClick, isFavourite, getFavourites };
};
