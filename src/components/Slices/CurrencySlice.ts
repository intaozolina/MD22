import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

type Currency = {[key:string]:string};
type Rate = {[key:string]:number};
type AllCurrenciesResponse = Currency;
type SingleCurrencyResponse = Rate;
type ConverterResponse = {[key:string]:number} & {date:string};

export const currencyAPi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/' }),
  endpoints: (builder) => ({
    getCurrencyByName: builder.query<SingleCurrencyResponse, string>({
      query: (name) => `currencies/${name}.json`,
    }),
    getAllCurrencies: builder.query<AllCurrenciesResponse, void>({
      query: () => 'currencies.json',
    }),
    getTwoCurrencies: builder.query<ConverterResponse, { from:string, to:string }>({
      query: ({ from, to }) => `currencies/${from}/${to}.json`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCurrenciesQuery, useGetCurrencyByNameQuery, useGetTwoCurrenciesQuery } = currencyAPi;

export default currencyAPi;
