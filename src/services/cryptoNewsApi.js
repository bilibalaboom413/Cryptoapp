import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
	"X-BingApis-SDK": "true",
	"X-RapidAPI-Key": "99f3b483a0msh86ede1b91dfb28ep147095jsn7c31a52e8521",
	"X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
	reducerPath: "cryptoNewsApi", // reducer name
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) =>
				createRequest(
					`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
				),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news',
//   params: {safeSearch: 'Off', textFormat: 'Raw'},
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': '99f3b483a0msh86ede1b91dfb28ep147095jsn7c31a52e8521',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
