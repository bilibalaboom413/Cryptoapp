import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
	reducer: {
		[cryptoApi.reducerPath]: cryptoApi.reducer,
		[cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
	},
	// * The middleware option in configureStore accepts a callback function,
	// * and that callback will be given getDefaultMiddleware as its argument:
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(cryptoApi.middleware)
			.concat(cryptoNewsApi.middleware),
});
