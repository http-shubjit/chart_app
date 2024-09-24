import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
	// React.StrictMode renders every component twice (in the initial render), only in development.
	<React.StrictMode>
		<BrowserRouter>
								<App />
</BrowserRouter>
					
			
	</React.StrictMode>
);
