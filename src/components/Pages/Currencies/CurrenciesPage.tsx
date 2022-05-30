import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useGetAllCurrenciesQuery,
  useGetCurrencyByNameQuery,
  useGetTwoCurrenciesQuery,
} from '../../Slices/CurrencySlice';
import './currencies.scss';

const CurrenciesPage = () => {
  const {
    data: currencies, isLoading, error, isFetching,
  } = useGetAllCurrenciesQuery();

  const navigate = useNavigate();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if ((!currencies && !isFetching) || error) {
    throw new Error('Something went wrong');
  }
  const currencyArray = Object.keys(currencies);
  return (
    <div className="currency-wrapper">
      {currencyArray.map((key) => (
        <button
          className="button"
          key={key}
          onClick={() => { navigate(`/currencies/${key}.json`); }}
        >
          {key}
        </button>
      ))}

    </div>
  );
};

export default CurrenciesPage;
