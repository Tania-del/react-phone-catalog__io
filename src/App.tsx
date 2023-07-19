import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header';
import Container from './components/Container';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/phones" element={<h1>Phones page</h1>} />
        <Route path="/tablets" element={<h1>Tablets page</h1>} />
        <Route path="/accessories" element={<h1>Accessories page</h1>} />
        <Route path="/product/:productId" />
      </Routes>
    </div>
  );
};
