import * as actions from './actionTypes'
import axios from 'axios';
const apiEndPoint =process.env.REACT_APP_API_URL + "users"
console.log(apiEndPoint)
export const registerUser=(user,navigate)=> (dispatch)=>
{
axios
.post(apiEndPoint,user)
.then(response=>{
console.log("data",response.data)    
 dispatch({
type:actions.REGTSTER_USER,
payload:{user:response.data}
})
console.log("data",response.data)
})



.catch(()=>navigate("/error"));



};