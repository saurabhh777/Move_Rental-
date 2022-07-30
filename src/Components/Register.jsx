import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../actions/users";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
const Register=()=>{
  let dispatch =useDispatch();
  let navigate =useNavigate();
  const  schema = yup.object().shape({

      name:yup.string()
      
      .required("Name is required")
      .min(5,"Name shuld be mini 5 letter")
      .max(10,"Name shuld be max 10 letter"),
      
      
      email:yup.string()
      .email("Email should be vaild")
      .required("Email is required")
      .min(5,"Email should be mini 5 letter")
      .max(255,"Email should be max 255 letter"),
      
      
     password:yup.string()
     .required("password is required")
     .min(5,"password should be mini 5 letter")
     .max(1024,"password should be maximum 1024 letter"), 
    
      
      
     isAdmin:yup
      .boolean()
      .default(false),
  })
  const
   {register,
    handleSubmit,
    formState:{errors}
  }=useForm({resolver:yupResolver(schema)});
   
  
  const onSubmitHandler=(data)=>{
      console.log(data);
      dispatch(registerUser(data,navigate));
      navigate("/login")
    }

    return <div>
    <h2>Register Form</h2>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
    
    
    <div className="mb-3">
    <label htmlFor="Name" className="form-label">
      Name
    </label>
    <input type="name"
    {...register("name")} 
    className="form-control" 
    id="password"
    />
     <p style={{color:"red"}}>
       {errors.name? errors.name.message:""}
       </p>
  </div>







  <div className="mb-3">
    <label htmlFor="email" className="form-label">
      Email address
      </label>
    <input type="email"
     {...register("email")}
    className="form-control" 
    id="email" 
    />
    <p style={{color:"red"}}>
      {errors.email? errors.email.message:""}</p>
  </div>
 
 
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">
      Password
      </label>
    <input type="password"
    {...register("password")} 
    className="form-control" 
    id="Password"
    />
     <p style={{color:"red"}}>
       {errors.password? errors.password.message:""}
       </p>
  </div>




  <div className="mb-3 form-check">
  <label className="form-check-label" htmlFor="isAdmin">isAdmin</label>

    <input type="checkbox" 
    {...register("isAdmin")}
    className="form-check-input" id="isAdmin"/>
      <p style={{color:"red"}}>
       {errors.isAdmin? errors.isAdmin.message:""}
       </p>
    
  </div>
   
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
} 



 
export default Register;