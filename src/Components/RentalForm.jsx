
import { useForm } from "react-hook-form";
import* as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addRental } from "../actions/rentals";
import { getAllMovies } from "../actions/movies";
import {getAllCustomers} from "../actions/customers";


const RentalForm=()=> {
  const rentals =useSelector((state)=>state.rentalReducer.rentals)
  const customers = useSelector((state) => state.customerReducer.customers);
  const movies = useSelector((state) => state.movieReducer.movies);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const schema = yup.object().shape({
    customerId: yup
    .string()
    .required(),
    movieId: yup
    .string()
    .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  useEffect(() => {
    dispatch(getAllCustomers(navigate));
    dispatch(getAllMovies(navigate));
  }, []);
  const onSubmitHandler = (data) => {
  if(!data._id)dispatch(addRental(data, navigate));

    navigate("/rentals");
  };

  return (
    <div>
      <h2>Rental Form</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="mb-3">
          <label htmlFor="customerId" className="form-label">
            customer
          </label>
          <select
            type="text"
            className="form-control"
            id="customerId"
            {...register("customerId")}
          >
            <option value="">Select customer</option>
            {customers.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-3">
          <label htmlFor="movieId" className="form-label">
            Movie
          </label>
          <select
            type="text"
            className="form-control"
            id="movieId"
            {...register("movieId")}
          >
            <option value="">Select movie</option>
            {movies.map((m) => (
              <option key={m._id} value={m._id}>
                {m.title}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default RentalForm;
   
   
  
    
