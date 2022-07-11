import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
	"X-RapidAPI-Key": "99f3b483a0msh86ede1b91dfb28ep147095jsn7c31a52e8521",
	"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/coins";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: "cryptoApi", // reducer name
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`?limit=${count}`),
		}),
	}),
});

export const { useGetCryptosQuery } = cryptoApi;

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': '99f3b483a0msh86ede1b91dfb28ep147095jsn7c31a52e8521',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };
