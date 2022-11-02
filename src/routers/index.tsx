import React from "react";
import { RouteObject } from "react-router-dom";
import LazyWrapper from "@/components/LazyWrapper";


const routes:RouteObject[] = [
	{
		path:'/',
		element: <LazyWrapper path={'/RouterOne'}></LazyWrapper>
	},
	{
		path:'/home',
		element: <LazyWrapper path={'/RouterTwo'}></LazyWrapper>
	},
	{
		path:'*',
		element: <h1>R U kidding me? What's this undefined urlPath</h1>
	}
]


export default routes;
