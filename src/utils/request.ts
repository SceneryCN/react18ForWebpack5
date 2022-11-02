import axios , {AxiosRequestConfig} from "axios"
import axiosRetry from "axios-retry";
import {Notification} from "@arco-design/web-react"

const BASE_CONFIG:Partial<AxiosRequestConfig> = {
	baseURL: "../../src/api/",
}

const client = axios.create(BASE_CONFIG)
axiosRetry(client,{retries:3}); //错误自动重试3次
const http = async <T>(
	method: AxiosRequestConfig['method'],
	url:string,
	config?:AxiosRequestConfig
) => {
	try {
		const r = await client(url, {method,...config})
		if(r?.data?.err!==0){
			Notification.error({
				title:'出错了',
				content:r?.data?.err ?? "不知道什么错，反正就是有问题"
			})
		}
		return r?.data as T;
	}catch (err){
		console.log(err);
		return undefined
	}
}
