import * as actions from "./actionTypes";
import axios from "axios";
const apiEndPoint =process.env.REACT_APP_API_URL +"movies";


export const deleteMovie =(id,navigate)=>(dispatch,getState)=>{
    console.log(getState().loginReducer.token)   
   axios
   .delete(apiEndPoint+"/"+id,{
    headers :{"x-auth-token":getState().loginReducer.token}  
   } ) .then(()=>{
    let data={currentPage:1,pageSize:5,title:"",genreName:""};
    return  axios.post(apiEndPoint+"/pfs",data) 
   })
   .then((responce)=>
dispatch({
    type: actions.GET_ALL_MOVIES,
    payload:{
        movies:responce.data,
    }
})
)
.catch(()=>navigate("/error"))
};

export const addMovie = (movie, navigate) => (dispatch, getState) => {
  axios
    .post(apiEndPoint, movie, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then(()=>{
let data={currentPage:1,pageSize:5,genreName:"",title:""};
return axios.post(apiEndPoint +"/pfs",data);
    })
    .then((response) =>
      dispatch({
        type: actions.GET_ALL_MOVIES,
        payload: { movies: response.data },
      })
    )
    .catch(() => navigate("/error"));
};

export const updateMovie =(movie,navigate)=>(dispatch,getState)=>{
  axios
  .put(apiEndPoint+"/"+movie._id,movie,{
    headers:{'x-auth-token':getState().loginReducer.token} 
  })
  .then((response)=>
    dispatch({
    type:actions.UPDATE_MOVIE,
    payload:{
    movie:response.data,
    },
})
  )
  .catch(()=>navigate("/error"));
}

export const getMoviesCount=(genreName,title,navigate)=>(dispatch)=>{
  axios
  .get(apiEndPoint+"/count?genreName="+genreName+"&title="+title)
  .then((responce)=>
  dispatch({
type:actions.GET_MOVIES_COUNT,
payload:{count:responce.data.moviesCount},
})
)
.catch(()=>navigate("/error"));
}

export const getAllMovies=(data,navigate)=>(dispatch)=>{
 axios 
 .post (apiEndPoint+"/pfs",data)
 .then((responce)=>
 dispatch({
   type:actions.GET_ALL_MOVIES,
   payload:{movies:responce.data}
 })
 )
 .catch(()=>navigate("/error"));
}