import * as actions from"../actions/actionTypes"

let movieReducer =(state ={movies:[],moviesCount:0},action)=>{
    switch(action.type){
       case actions.DELETE_MOVIE:
           return{...state,movies:state.movies.filter((m)=>m._id !== action.payload.movie._id),
           } 
case actions.GET_MOVIES_COUNT:
    return{...state,moviesCount:action.payload.count};

    case actions.GET_ALL_MOVIES:
        return {...state,movies:action.payload.movies};
       
        case actions.ADD_MOVIE:
        return {movies:[...state.movies,action.payload.movie],}

        case actions.UPDATE_MOVIE:
const updatedMovies=[...state.movies];
const index =state.movies.findIndex(
(m)=>m._id === action.payload.movie._id    
)
updatedMovies[index]=action.payload.movie;
return {...state,movies:updatedMovies};
default:
return state;
}
} 
export default movieReducer;