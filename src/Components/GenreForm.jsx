
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addGenre,updateGenre } from "../actions/genres";

const GenreForm=()=>{
  let params= useParams();
  let  dispatch = useDispatch();
  let navigate=useNavigate();
  const genres =useSelector((state)=> state.genreReducer.genres)
    const  schema = yup.object().shape({
  
        name:yup.string()
      
        .required("Name is required")
        .min(5,"Name shuld be mini 5 letter")
        .max(10,"Name shuld be max 10 letter"),
  
  
    })
    const
    {register,
     handleSubmit,
     formState:{errors},
     setValue,
   }=useForm({resolver:yupResolver(schema)});
    
   useEffect(()=>{
     const genreId=params.id;
     if(!genreId) return;
     const genre =genres.find((g)=> g._id === genreId);
     if(!genre)navigate("/notFound")
     setValue('name',genre.name)
     setValue('_id',genre._id)
   },[])
   const onSubmitHandler=(data)=>{
       //console.log(data);
       if(!data._id)dispatch(addGenre(data,navigate));
       else dispatch(updateGenre(data,navigate));
       
       navigate("/genres");
     }
    
     return <div>
     <h2>Genre Form</h2>
     <form onSubmit={handleSubmit(onSubmitHandler)}>
     
     
     <div className="mb-3">
     <label htmlFor="Name" className="form-label">
       Name
       </label>
     <input type="name"
     {...register("name")} 
     className="form-control" 
     id="name"
     />
      <p style={{color:"red"}}>
        {errors.name? errors.name.message:""}
        </p>
   </div> 

   <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
}
export default GenreForm;


  