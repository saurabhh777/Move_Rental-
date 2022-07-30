
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addCustomer, updateCustomer } from "../actions/customers";
 
const CustomerForm=()=>{
    let params= useParams();
    let  dispatch = useDispatch();
  let navigate=useNavigate();
  const customers =useSelector((state)=> state.customerReducer.customers)
  
  const  schema = yup.object().shape({
       
      name:yup.string()
      .required("Name is required")
      .min(5,"Name shuld be mini 5 letter")
      .max(50,"Name shuld be max 10 letter"),
        
        
      phoneNumber:yup.string()
      .min(7,"phoneNumber shuld be min 7 number")
      .max(10,"phoneNumber shuld be max 10 number  ")
      .required("phoneNumber is required"),
        
        
      isGold:yup.boolean()
      .default(false),
      


})
const
{register,
 handleSubmit,
 formState:{errors},
 setValue,
}=useForm({resolver:yupResolver(schema)});

useEffect(()=>{
 const customerId=params.id;
 if(!customerId) return;
 const customer =customers.find((c)=> c._id === customerId);
 if(!customer)navigate("/notFound")
 
    setValue('name',customer.name)
    setValue('phoneNumber',customer.phoneNumber)
    setValue('isGold',customer.isGold)
    setValue('_id',customer._id)
 
    
 },[])
const onSubmitHandler=(data)=>{
   //console.log(data);
   if(!data._id)dispatch(addCustomer(data,navigate));
   else dispatch(updateCustomer(data,navigate));
   navigate("/customers");


 }


 return <div>
 <h2>Customer Form</h2>
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


<div className="mb-3">
 <label htmlFor="phone" className="form-label">
   Phone
   </label>
 <input type="text"
 {...register("phoneNumber")} 
 className="form-control" 
 id="phone"
 />
  <p style={{color:"red"}}>
    {errors.phone? errors.phone.message:""}
    </p>
</div> 


<div className="mb-3 form-check">
  <label className="form-check-label" htmlFor="isGold">isGold</label>

    <input type="checkbox" 
    {...register("isGold")}
    className="form-check-input" id="isGold"/>
      <p style={{color:"red"}}>
       {errors.isGold? errors.isGold.message:""}
       </p>
    
  </div>

<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

}

export default CustomerForm;