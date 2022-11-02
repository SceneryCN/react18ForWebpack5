import axios from "axios";

const login = async ()=>{
	return axios.post('/api/xxxx',{username:'xxxx',password:'xxxx'})
}

export {
	login,
}
