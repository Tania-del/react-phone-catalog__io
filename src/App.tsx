import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { SearchContextProvider } from './context/SearchContext';
import { PhoneDetails } from './components/PhoneDetails';
import { FavouritesPage } from './pages/FavouritesPage';
import { FavouriteProvider } from './context/FavouriteContext';

export const App = () => {
  return (
    <div className="App">
      <FavouriteProvider>
        <SearchContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/phones" element={<PhonesPage />} />
            <Route path="/phones/:phoneId" element={<PhoneDetails />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Routes>
        </SearchContextProvider>
      </FavouriteProvider>
    </div>
  );
};
