import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "antd/dist/antd.min.css"; // import antd with react-script 5.0.0

import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>
	// </React.StrictMode>
);
