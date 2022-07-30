import * as actions from './actionTypes';
import axios from 'axios'
const  apiEndPoint=process.env.REACT_APP_API_URL+"logins";
export const login =(user,navigate) =>(dispatch)=>{
    axios
    .post (apiEndPoint,user)
    .then((response)=>{
     sessionStorage.setItem("token",response.data);
    dispatch({
    type:actions.LOGIN_USER,
    payload:{
    token:response.data,
    }
    })
    console.log("data",response.data)
    })
    .catch(()=>navigate("/error"));
}
export const loadLogin=()=>({
   type:actions.LOGIN_USER,
   payload:{
   token:sessionStorage.getItem("token")
   }

})