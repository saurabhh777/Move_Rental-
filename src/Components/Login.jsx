import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {login} from "../actions/logins"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Login=()=>{
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const  schema = yup.object().shape({
   
    email: yup.string()
    .email("Email should be vaild")
    .required("Email is required")
    .min(5,"Email should be mini 5 letter")
    .max(255,"Email should be max 255 letter"),
   
    password: yup.string()
    .required("password is required")
    .min(5,"password should be mini 5 letter")
    .max(1024,"password should be maximum 1024 letter"),
  })
  const
   {register,
    handleSubmit,
    formState:{errors}
  }=useForm({resolver:yupResolver(schema)});
   
  
  const onSubmitHandler=(data)=>{
      console.log(data);
      dispatch(login(data,navigate));
      navigate("/genres")
    }
  return <div>
    <h2>Login Form</h2>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
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
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
}
export default Login;