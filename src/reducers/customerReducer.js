import * as actions from"../actions/actionTypes"



let customerReducer =(state ={customers:[]},action)=>{
switch(action.type){
   case actions.DELETE_CUSTOMER:
       return{
           customers:state.customers.filter((c)=>c._id !== action.payload.customer._id),
       } 
case actions.GET_ALL_CUSTOMERS:
    return {customers:action.payload.customers};
    
    case actions.ADD_CUSTOMER:
    return {
        customers:[
        ...state.customers,
        action.payload.customer],
    
}


case actions.UPDATE_CUSTOMER:
const updatedCustomers=[...state.customers];
const index =state.customers.findIndex(
(c)=>c._id === action.payload.customer._id    
)
updatedCustomers[index]=action.payload.customer;
return {customers:updatedCustomers};

    default:
        return state;
}
    } 
    export default customerReducer;





    
