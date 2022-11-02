import React from 'react'
import routes from "./routers";
import {useRoutes} from "react-router"
import style from "./App.module.sass"

function App() {
	const router = useRoutes(routes)
	return (
		<div className={style.app}>
			{router}
		</div>
	)
}

export default App

