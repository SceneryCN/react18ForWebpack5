import React, {FC, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "@/store/festures/testStore";
import {useNavigate} from "react-router";
import {login} from "@/api"

const RouterOne: FC<any> = (props) => {
	const {value} = useSelector((store: any) => store.counter)
	const navigate = useNavigate()
	const dispatch = useDispatch()


	return (
		<div>
			<h2>我是第一个页面</h2>
			<h1 style={{color:"red"}}>全局变量:{value}</h1>
			<button onClick={() => {
				dispatch(increment())
			}}>全局变量增加
			</button>
			&nbsp;
			<button onClick={() => {
				dispatch(decrement())
			}}>全局变量减少
			</button>
			<br/>
			<br/>
			<button onClick={() => {
				navigate("/home", {replace: false})
			}}>跳转到页面二
			</button>
			<br/>
			<br/>
			<button onClick={async () => {
				const res = await login()
				console.log(res)
			}}>测试请求
			</button>

		</div>
	);
};

export default RouterOne;
