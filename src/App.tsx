import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { SearchContextProvider } from './context/SearchContext';
import { PhoneDetails } from './components/PhoneDetails';
import { FavouritesPage } from './pages/FavouritesPage';
import { FavouriteProvider } from './context/FavouriteContext';
import { ErrorMessageProvider } from './context/ErrorMessageContext';
import { CartPage } from './pages/CartPage';
import { CartProvider } from './context/CartContext';

export const App = () => {
  return (
    <div className="App">
      <ErrorMessageProvider>
        <FavouriteProvider>
          <CartProvider>
            <SearchContextProvider>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/phones" element={<PhonesPage />} />
                <Route path="/phones/:phoneId" element={<PhoneDetails />} />
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </SearchContextProvider>
          </CartProvider>
        </FavouriteProvider>
      </ErrorMessageProvider>
    </div>
  );
};
