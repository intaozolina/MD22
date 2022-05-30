import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCurrencyByNameQuery } from '../../Slices/CurrencySlice';
import './singleCurrency.scss';

const SingleCurrencyRate = () => {
  const { nameId } = useParams();

  // @ts-ignore
  const { data: currency, isLoading, isFetching, error } = useGetCurrencyByNameQuery(nameId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if ((!currency && !isFetching) || error) {
    throw new Error('Something went wrong');
  }

  // @ts-ignore
  const currencyRate = Object.entries(currency[nameId]);
  // @ts-ignore
  return (
    <div>
      <h1 className="currency-heading">
        {nameId}
        {' '}
        rate to other currencies
      </h1>
      <div className="currency-rate">
        {currencyRate.map(([key, value]) => (
          <div key={key} className="currency-box">
            <span className="currency-key">{key}</span>
            :
            <span className="currency-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCurrencyRate;
