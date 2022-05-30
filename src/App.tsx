import React from 'react';
import {
  Routes, Route, Navigate, BrowserRouter,
} from 'react-router-dom';
import './App.scss';
import Page404 from './components/Pages/Page404/Page404';
import Header from './components/Header/Header';
import CurrenciesPage from './components/Pages/Currencies/CurrenciesPage';
import SingleCurrencyRate from './components/Pages/SingleCurrency/SingleCurrencyRate';
import ConvertedCurrency from './components/Pages/ConvertedCurrency/ConvertedCurrency';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/currencies.json" />} />
      <Route path="/currencies.json" element={<CurrenciesPage />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/currencies/:nameId.json" element={<SingleCurrencyRate />} />
      <Route path="/currencies/converter" element={<ConvertedCurrency />} />
    </Routes>
  </BrowserRouter>
);
export default App;
