import{useSelector} from "react-redux";
import {Link} from "react-router-dom"; 
import { deleteGenre,getAllGenres } from "../actions/genres";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";

const Genres=()=>{
  let dispatch =useDispatch();
  let navigate=useNavigate();
  const genres =useSelector((state)=> state.genreReducer.genres);
 useEffect(()=>{
   dispatch(getAllGenres(navigate));
 },[]);
   
  return(
    <div className="row m-5">
      <div className="col-3">
<Link to ="/genres/new" className="btn btn-sm btn-primary">Add Genre</Link>
      </div>
      <div className="col">
        {genres.length===0?
        <p>
          No genres found

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
{genres.map((g) => (
          <tr key={g._id}>
            <td>
            <Link to={`/genres/${g._id}`}>{g.name} </Link>
              </td>
            <td>
              <button 
              onClick={() => dispatch(deleteGenre(g._id,navigate))}
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
export default Genres;