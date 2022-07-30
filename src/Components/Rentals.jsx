import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom" 
import { useEffect } from "react";
import { getAllRentals,deleteRental, returnRental } from "../actions/rentals";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";


const Rentals=()=>{
let dispatch= useDispatch();
let navigate=useNavigate();

const rentals=useSelector((state)=>state.rentalReducer.rentals);
useEffect(()=>dispatch(getAllRentals(navigate)),[]);
return(
  <div className="row m-5">
   <div className="col-3">
     
     <Link to="/rentals/new" className="btn btn-sm btn-primary">
      Add Rental
      </Link>
     
     </div> 
<div className="col">
  {rentals.length<=0?(
   <p>No rentals Found</p> 
  ):(
<table className="table">
  <thead>
    <tr>
      <th>Movie</th>
      <th>Customer</th>
      <th>Fee</th>
      <th>Rented on</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {rentals.map((r)=>
      <tr key={r._id} >
        <td>{r.movie.title}</td>
        <td>{r.customer.name}</td>
        <td>{r.rentalFee}</td>
        <td>{r.dateOut}</td>
        <td>{r.dataIn}</td>
        
     <td>
       <button 
       className="btn btn-sm btn-danger" 
       onClick={()=>dispatch(deleteRental(r._id,navigate))}>
         Delete
         </button>
     </td>

<td>
<button 
className="btn btn-sm btn-danger"
onClick={()=>dispatch(returnRental(r._id,navigate))}>
  Retun</button>
</td>

      </tr>
)}
  </tbody>
    
</table>
  )}
</div>
  </div>



)
}
export default Rentals;