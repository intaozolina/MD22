import React, { useState } from 'react';
import { useGetAllCurrenciesQuery } from '../../Slices/CurrencySlice';
import ConverterResult from '../../ConverterResult/ConverterResult';
import './convertedCurrency.scss';

const ConvertedCurrency = () => {
  const [selectedValues, setSelectedValues] = useState({ from: '', to: '' });

  const {
    data: currencies, isLoading, error, isFetching,
  } = useGetAllCurrenciesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if ((!currencies && !isFetching) || error) {
    throw new Error('Something went wrong');
  }
  const currencyArray = Object.keys(currencies);
  return (
    <>
      <h1>CONVERTER</h1>
      <div className="converter__wrapper">
        <select
          value={selectedValues.from}
          className="converter__select"
          onChange={(e) => { setSelectedValues({ ...selectedValues, from: e.target.value }); }}
        >
          <option value="" disabled>Select Value</option>
          {currencyArray.map((key) => (
            <option key={key}>{key}</option>
          ))}
        </select>
        <select
          value={selectedValues.to}
          className="converter__select"
          onChange={(e) => { setSelectedValues({ ...selectedValues, to: e.target.value }); }}
        >
          <option value="" disabled>Select Value</option>
          {currencyArray.map((key) => (
            <option key={key}>{key}</option>
          ))}
        </select>
        {selectedValues.from && selectedValues.to && <ConverterResult fromTo={selectedValues} />}
      </div>
    </>
  );
};

export default ConvertedCurrency;
