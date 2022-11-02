import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import style from "./index.module.sass"
const RouterTwo = () => {
	const {value} = useSelector((store:any)=>store.counter)
	const navigate = useNavigate()
	return (
		<div>
			<h2>我是第二个页面</h2>
			<p>这是第一个页面上的全局变量{value}</p>
			<br/>
			<div className={style.test}>这就是单纯为了弄个CSS</div>
			<button onClick={()=>{navigate("/", { replace: false})}}>跳转到页面一</button>
		</div>
	);
};

export default RouterTwo;
