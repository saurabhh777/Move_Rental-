import * as actions from "./actionTypes";
import axios from "axios";

const apiEndPoint =process.env.REACT_APP_API_URL +"customers";

export const deleteCustomer =(id,navigate)=>(dispatch,getState)=>{
    console.log(getState().loginReducer.token)   
   axios
   .delete(apiEndPoint+"/"+id,{
    headers :{"x-auth-token":getState().loginReducer.token}  
   } ) 
   .then((responce)=>
dispatch({
    type: actions.DELETE_CUSTOMER,
    payload:{
        customer:responce.data,
    }
})
)
.catch(()=>navigate("/error"))
};

export const getAllCustomers =(navigate) =>(dispatch)=>{
  axios
  .get(apiEndPoint)
  .then((response)=>
  dispatch({
   type: actions.GET_ALL_CUSTOMERS,
   payload:{customers:response.data} 
  })
  ) 

  .catch(()=>navigate("/error"))  

}

export const addCustomer = (customer, navigate) => (dispatch, getState) => {
  axios
    .post(apiEndPoint, customer, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((response) =>
      dispatch({
        type: actions.ADD_CUSTOMER,
        payload: { customer: response.data },
      })
    )
    .catch(() => navigate("/error"));
};

export const updateCustomer =(customer,navigate)=>(dispatch,getState)=>{
  axios
  .put(apiEndPoint+"/"+customer._id,customer,{
    headers:{'x-auth-token':getState().loginReducer.token} 
  })
  .then((response)=>
    dispatch({
    type:actions.UPDATE_CUSTOMER,
    payload:{
    customer:response.data,
    },
})
  )
  .catch(()=>navigate("/error"));
}







