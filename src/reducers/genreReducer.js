import * as actions from"../actions/actionTypes"



let genreReducer =(state ={genres:[]},action)=>{
switch(action.type){
   case actions.DELETE_GENRE:
       return{
           genres:state.genres.filter((g)=>g._id !== action.payload.genre._id),
       } 
case actions.GET_ALL_GENRES:
    return {genres:action.payload.genres};

    case actions.ADD_GENRE:
    return {
        genres:[
        ...state.genres,
        action.payload.genre],
    
}
case actions.UPDATE_GENRE:
const updatedGenres=[...state.genres];
const index =state.genres.findIndex(
(g)=>g._id === action.payload.genre._id    
)
updatedGenres[index]=action.payload.genre;
return {genres:updatedGenres};



    default:
        return state;
}
    } 
    export default genreReducer;