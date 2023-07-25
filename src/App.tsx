import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header';
import { HomePage } from './pages/HomePage';
// import Container from './components/Container';
// import Home from './pages/Home';
// import Phones from './pages/Phones';
// import Tablets from './pages/Tablets';
// import Accessories from './pages/Accessories';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<h1>hfskdh</h1>} />
        <Route path="/tablets" element={<h1>Tablets page</h1>} />
        <Route path="/accessories" element={<h1>Accessories page</h1>} />
        <Route path="/product/:productId" />
      </Routes>
    </div>
  );
};
