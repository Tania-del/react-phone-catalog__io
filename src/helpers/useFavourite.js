// import { useState } from 'react';
// import {
//   getLocalStorageItem,
//   // removeLocalStorageItem,
//   setLocalStorageItem,
// } from './LocalStorageState';

// export const useFavourite = () => {
//   const getFavourites = () => getLocalStorageItem('phoneId') || [];
//   const [favourites, setFavourites] = useState(getFavourites());

//   const isFavourite = (itemId) => {
//     return getFavourites().includes(itemId);
//   };

//   const addToFavourite = (key, itemId) => {
//     // eslint-disable-next-line @typescript-eslint/no-shadow
//     const savedFavourites = getFavourites();

//     if (!isFavourite(itemId)) {
//       setFavourites([...savedFavourites, itemId]);
//       setLocalStorageItem(key, [...savedFavourites, itemId]);
//     } else {
//       // eslint-disable-next-line max-len
//       const removedItem = savedFavourites.filter(
//         (current) => current !== itemId,
//       );

//       setFavourites(removedItem);
//       setLocalStorageItem(key, removedItem);
//     }
//   };

//   return {
//     addToFavourite, isFavourite, getFavourites, favourites,
//   };
// };
