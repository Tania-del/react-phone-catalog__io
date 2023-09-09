import {
  createContext, ReactNode, useState,
} from 'react';
import { LOCALSTORAGE_KEYS } from '../constants/comman';
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from '../helpers/LocalStorageState';

interface IFavouriteContext {
  favourites: string[];
  isFavourite: (itemid: string) => boolean;
  addToFavourite: (key: string, itemId: string) => void;
}

export const FavouriteContext = createContext<IFavouriteContext>({
  favourites: [],
  isFavourite: () => false,
  addToFavourite: () => {},
});

interface IFavouriteProvider {
  children: ReactNode,
}

export const FavouriteProvider = ({ children }: IFavouriteProvider) => {
  // console.log(FavouriteContext);
  // eslint-disable-next-line max-len
  const getFavourites = () => getLocalStorageItem(LOCALSTORAGE_KEYS.phoneId) ?? [];
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
