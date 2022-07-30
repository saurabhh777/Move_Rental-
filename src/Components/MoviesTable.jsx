import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteMovie } from "../actions/movies";
import TableHeader from "./common/tableHeader";
const MoviesTable = (props) => {
    const {movies,onSort,sortColumn}=props
    let dispatch=useDispatch();
    let navigate=useNavigate();
const columns=[
{path:"title",label:"Title"},
{path:"genre.name",label:"Genre"},
{path:"numberInStock",label:"Stock"},
{path:"dailyRentalRate",label:"Rate"},
{key:"delete"}




]
return (       
<table className="table">
<TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn}/>
<tbody>
{movies.map((m) => (
<tr key={m._id}>
<td>
            <Link to={`/movies/${m._id}`}>{m.title} </Link>
              </td>
              <td>{m.genre.name}</td>
              <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
           
            <td>
              <button
              onClick={() => dispatch(deleteMovie(m._id,navigate))}
              className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        ))}
</tbody>

    </table> 
    );
}
 
export default MoviesTable;


