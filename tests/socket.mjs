import axios from 'axios'

function parseResult(response){
	const result = response.data.result;
	if(result instanceof Array && result.length>0){
		console.log("共有",result.length,"条相关结果")
		result.forEach(n=>{
			console.log("item:",n)
		})
	}else{
		console.log(response)
	}
}

async function getUser(){
	try{
		const respone = await axios.get('https://suggest.taobao.com/sug',{
			params:{
				code: 'utf-8',
				q: '腕表'
			}
		})
		parseResult(respone)
		//console.log(respone);
	}catch(error){
		console.error(error)
	}
}

function promiseGetUser(){
	axios.get('https://suggest.taobao.com/sug',{
		params:{
			code: 'utf-8',
			q: '腕表'
		}
	}).then(function(response){
		parseResult(response)
	}).catch(function(error){
		console.log(error)
	})
}


function postUser(){
	axios({
		method: 'post',
		url: 'https://suggest.taobao.com/sug',
		// request query
		params:{
			code: 'utf-8',
			q: '腕表'
		},
		// request body
		// data: {
		// 	firstName: 'Fred',
		// 	lastName: 'Flintstone'
		// }
	})
}

export default {
	getUser,
	promiseGetUser
}