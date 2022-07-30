import * as actions from '../actions/actionTypes'
let userReducer =(state={user:{}},action)=>{
switch(action.type){
case actions.REGTSTER_USER:
    return {user:action.payload.user};
    default:
       return state;         
    }
}
export default userReducer;