import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
	Homepage,
	Navbar,
	Exchanges,
	Cryptocurrencies,
	CryptoDetails,
	News,
} from "./components";
import "./App.css";

function App() {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<Routes>
							<Route exact path="/" element={<Homepage />} />
							<Route
								exact
								path="/exchanges"
								element={<Exchanges />}
							/>
							<Route
								exact
								path="/cryptocurrencies"
								element={<Cryptocurrencies />}
							/>
							<Route
								exact
								path="/crypto/:coinId"
								element={<CryptoDetails />}
							/>
							<Route exact path="/news" element={<News />} />
							{/* <Route exact path="/">
								<Homepage />
							</Route> */}
							{/* <Route exact path="/exchanges">
								<Exchanges />
							</Route> */}
							{/* <Route exact path="/cryptocurrencies">
								<Cryptocurrencies />
							</Route>
							<Route exact path="/crypto/:coinId">
								<CryptoDetails />
							</Route>
							<Route exact path="/news">
								<News />
							</Route> */}
						</Routes>
					</div>
				</Layout>
			</div>
			<div className="footer"></div>
		</div>
	);
}

export default App;
