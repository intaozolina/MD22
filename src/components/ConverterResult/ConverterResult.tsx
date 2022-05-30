import React from 'react';
import { useGetTwoCurrenciesQuery } from '../Slices/CurrencySlice';
import './converterResult.scss';

type ConvertedResultProps = {
  fromTo: {
    from:string;
    to:string;
  }
}

const ConverterResult = ({ fromTo }:ConvertedResultProps) => {
  const {
    data, error, isLoading, isFetching,
  } = useGetTwoCurrenciesQuery(fromTo);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if ((!data && !isFetching) || error) {
    throw new Error('Something went wrong');
  }
  return (
    <div className="converter_result">
      <h1>Result:</h1>
      <span className="converter__rate">
        <span className="currency-rate">
          {fromTo.to}
          :
        </span>
        <span className="currency-value">
          {data[fromTo.to]}
        </span>
      </span>
      <span className="converter__date">
        Date:
        {' '}
        {data.date}
      </span>
    </div>
  );
};

export default ConverterResult;
