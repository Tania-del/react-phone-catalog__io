import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/tablets" element={<h1>Tablets page</h1>} />
        <Route path="/accessories" element={<h1>Accessories page</h1>} />
        <Route path="/product/:productId" />
      </Routes>
    </div>
  );
};
