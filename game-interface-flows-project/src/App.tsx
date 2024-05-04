import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import { createRoutes } from "./routes/RouteFactory";
import { StoreProvider } from "./stores/storeContext";
import Navbar from "./components/Navbar";
import CookieConsentToast from "./components/CookieConsentToast";

function App() {
	return (
		<>
			<StoreProvider>
				<Router>
					<Navbar />
					<Routes>{createRoutes()}</Routes>
					<CookieConsentToast />
				</Router>
			</StoreProvider>
		</>
	);
}

export default App;
