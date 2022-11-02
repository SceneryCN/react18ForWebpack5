import "./axios"
import "./index.sass"
import App from "./App";
import React from "react";
import store from "@/store";
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
const root = document.getElementById("root")
console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('BASE_ENV:', process.env.BASE_ENV)
if (root) {
	createRoot(root).render(
		<Provider store={store}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</Provider>
	)
}
