import {
  createContext, ReactNode, useState,
} from 'react';
import {
  getLocalStorageItem,
  // removeLocalStorageItem,
  setLocalStorageItem,
} from '../helpers/LocalStorageState';

interface IFavouriteContext {
  favourites: string[];
  isFavourite: (itemid: string) => boolean;
  addToFavourite: (key: string, itemId: string) => void;
}

// We should put here some default values to not allow the browser send errors or program to fail;
export const FavouriteContext = createContext<IFavouriteContext>({
  favourites: [],
  isFavourite: () => false,
  addToFavourite: () => {},
});

interface IFavouriteProvider {
  children: ReactNode
}

// Here we give it a name as FavoriteProvider because we select from FavoriteContext
// field Provider than make us choose the name for the component FavoriteProvider
// the name of it is up to you

export const FavouriteProvider = ({ children }: IFavouriteProvider) => {
  console.log(FavouriteContext)
  const getFavourites = () => getLocalStorageItem('phoneId') || [];
  const [favourites, setFavourites] = useState<string[]>(getFavourites());

  const isFavourite = (itemId: string) => {
    return favourites.includes(itemId);
  };

  const addToFavourite = (key: string, itemId: string) => {
    if (!isFavourite(itemId)) {
      const updatedFavorites = [...favourites, itemId];

      setFavourites(updatedFavorites);
      setLocalStorageItem(key, updatedFavorites);
    } else {
      // eslint-disable-next-line max-len
      const updatedFavorites = favourites.filter(
        (current) => current !== itemId,
      );

      setFavourites(updatedFavorites);
      setLocalStorageItem(key, updatedFavorites);
    }
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourite, isFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
