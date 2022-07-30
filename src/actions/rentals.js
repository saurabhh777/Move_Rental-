import * as actions from "./actionTypes";
import axios from "axios";


const apiEndPoint =process.env.REACT_APP_API_URL +"rentals";
export const getAllRentals =(navigate) =>(dispatch)=>{
    axios
    .get(apiEndPoint)
    .then((response)=>{
    console.log(response.data)
    dispatch({
    type: actions.GET_ALL_RENTALS,
    payload:{rentals:response.data} 
    })
    }
  )
.catch(()=>navigate("/error"))  
  
  }

export const deleteRental=(id,navigate)=>(dispatch,getState)=>{
    axios.delete(apiEndPoint+"/"+id,{
        headers:{"x-auth-token":getState().loginReducer.token},

    })
    .then((response)=>{
        console.log(response.data)
        dispatch({
        type: actions.DELETE_RENTAL,
        payload:{rental:response.data} 
        })
        }
    )
    .catch(()=>navigate("/error")) 
    
} 

export const addRental=(rental,navigate)=>(dispatch,getState)=>{
axios
.post(apiEndPoint,rental,{
headers:{'x-auth-token':getState().loginReducer.token}    
})
.then((response)=>{
    console.log(response.data)
    dispatch({
    type:actions.ADD_RENTAL,
    payload:{rental:response.data}
    })
})
.catch(()=>navigate("/error"))    
}

export const returnRental=(id,navigate)=>(dispatch,getState)=>{
    axios
    .patch(apiEndPoint+"/"+id,{
    headers:{'x-auth-token':getState().loginReducer.token}
})
.then((response)=>
dispatch({
    type:actions.RETURN_RENTAL,
    payload:{
        rental:response.data
    }
})
)
.catch(()=>navigate("/error"));
}