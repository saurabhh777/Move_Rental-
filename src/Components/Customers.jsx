import{useSelector} from "react-redux";
import { deleteCustomer,getAllCustomers } from "../actions/customers";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom" 

const Customers=()=>{
  let dispatch =useDispatch();
  let navigate=useNavigate();
  const customers =useSelector((state)=> state.customerReducer.customers);
  useEffect(()=> {
    dispatch(getAllCustomers(navigate));
  },[]);
  
  return(
    <div className="row m-5">
      <div className="col-3">
<Link to ="/customers/new" className="btn btn-sm btn-primary">Add Customer</Link>
      </div>
      <div className="col">
        {customers.length===0?
        <p>
          No customer found

        </p>: <table className="table">
<thead>
  <tr>
    <th>
      Name
      </th>
    <th></th>
  </tr>
</thead>
<tbody>
{customers.map((c) => (
          <tr key={c._id}>
            <td>
            <Link to={`/customers/${c._id}`}>{c.name} </Link>
              </td>
            <td>
              <button
              onClick={() => dispatch(deleteCustomer(c._id,navigate))}
              className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        ))}
</tbody>

    </table>}
      </div>
    </div>
   
  );
}
export default Customers;