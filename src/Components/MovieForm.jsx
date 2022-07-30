
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addMovie, updateMovie } from "../actions/movies";
import {getAllGenres}  from "../actions/genres"


const MovieForm=()=>{
    let params= useParams();
    let  dispatch = useDispatch();
    let navigate=useNavigate();
  const movies =useSelector((state)=> state.movieReducer.movies)
  let genres= useSelector((state)=> state.genreReducer.genres)
  const  schema = yup.object().shape({
    title:yup
    .string()
    .required("title is required")
    .min(3,"title shuld be mini 3 letter")
    .max(50,"title shuld be max 50 letter"),
      
      
    dailyRentalRate:yup
    .number("dailyRentalRate must a number")
    .min(0,"dailyRentalRate shuld be greater than 0 number")
    .max(10,"dailyRentalRate shuld be less 10 number")
    .required("dailyRentalRate is required"),
      
    numberInStock:yup
   .number("numberInstock must a number")
    .min(0," numberInStock shuld be min 0 number")
    .max(10,"NumberInStock shuld be max 10 number")
    .required("NumberInStock is required"),
      
  genreId:yup
  .string()
  .required("genre is required")

})
const
{register,
 handleSubmit,
 formState:{errors},
 setValue,
}=useForm({resolver:yupResolver(schema)});

useEffect(()=>{
  dispatch(getAllGenres(navigate));
 const movieId=params.id;
 if(!movieId) return;
 const movie =movies.find((g)=> g._id === movieId);
 if(!movie)navigate("/notFound")
 else{
  setValue('title',movie.title)
  setValue('dailyRentalRate',movie.dailyRentalRate)
  setValue('numberInStock',movie.numberInStock)
  setValue('genreId',movie.genre._id)
  setValue('_id',movie._id)
 }
 
 
    
 },[])

 const onSubmitHandler=(data)=>{
   console.log(data)
    if(!data._id)dispatch(addMovie(data,navigate));
    else dispatch(updateMovie(data,navigate));
    navigate("/movies");
  } 
  return <div>
 <h2>Movie Form</h2>
 <form onSubmit={handleSubmit(onSubmitHandler)}>
 
 
 <div className="mb-3">
 <label htmlFor="title" className="form-label">
   Title
   </label>
 <input type="text"
 {...register("title")} 
 className="form-control" 
 id="title"
 />
  <p style={{color:"red"}}>
    {errors.title? errors.title.message:""}
    </p>
</div> 







 <div className="mb-3">
 <label htmlFor="genreId" className="form-label">
   Genre
   </label>
 <select
 {...register("genreId")} 
 className="form-control" 
 id="genreId"
 >
 <option value="">Select Genre</option>
 {genres.map((g)=>(
   <option key={g._id} value={g._id}>
     {g.name}
   </option>
 ))}
</select>
</div> 

<div className="mb-3">
 <label htmlFor="dailyRentalRate" className="form-label">
   DailyRentalRate
   </label>
 <input type="double"
 {...register("dailyRentalRate")} 
 className="form-control" 
 id="dailyRentalRate"
 />
  <p style={{color:"red"}}>
    {errors.dailyRentalRate? errors.dailyRentalRate.message:""}
    </p>
</div> 

<div className="mb-3">
 <label htmlFor="numberInStock" className="form-label">
 NumberInStock
   </label>
 <input type="number"
 {...register("numberInStock")} 
 className="form-control" 
 id="numberInStock"
 />
  <p style={{color:"red"}}>
    {errors.numberInStock? errors.numberInStock.message:""}
    </p>
</div> 


<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

}

export default MovieForm;