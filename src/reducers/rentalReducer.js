import * as actions from"../actions/actionTypes"


let rentalReducer=(state={rentals:[]},action)=>{
switch(action.type){
case actions.GET_ALL_RENTALS:
            return {rentals:action.payload.rentals};

case actions.DELETE_RENTAL:
                return {
                    rentals:state.rentals.filter(
                        (r)=>r._id !== action.payload.rental._id
                    ),
}
case actions.ADD_RENTAL:
return{rentals:[...state.rentals,action.payload.rental]
}
case actions.RETURN_RENTAL:
const updateRentals=[...state.rentals];
const index =state.rentals.findIndex((r)=>r._id ===action.payload.rental._id)
updateRentals[index]=action.payload.rental;
return {rentals:updateRentals};   

default:
return  state;
    }
    };
export default rentalReducer;

