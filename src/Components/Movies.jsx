import{useSelector} from "react-redux";
import React from "react"
import { getAllMovies,getMoviesCount } from "../actions/movies";
import {Link} from "react-router-dom";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom" 
import Pagination from "./common/pagination"
import ListGroup from "./common/listGroup";
import {getAllGenres } from "../actions/genres";
import MoviesTable from "./MoviesTable"

const Movies=()=>{
  let [pageSize,setPageSize]=useState(5);
  let[currentPage,setCurrentPage]=useState(1);
  let[genreName,setGenreName]=useState("")
  let [title,setTitle]=useState("");
  let[sortColumn,setSortColumn]=useState({path:"title",order:1})
  let dispatch =useDispatch();
  let navigate=useNavigate();
  
  const movies =useSelector((state)=> state.movieReducer.movies);
  const genres=useSelector((state)=>state.genreReducer.genres  )
  const moviesCount=useSelector((state)=>state.movieReducer.moviesCount)


useEffect(()=>{
    let gName="";
    if(genreName !=="All Genres"){
      gName=genreName;
    }
  
dispatch(getMoviesCount(gName,title,navigate));
},[movies]);
  
useEffect(()=> {
    let data={pageSize,currentPage,genreName,title,sortColumn}
    dispatch(getAllMovies(data,navigate));
    dispatch(getAllGenres(navigate));
  },[]);



const handlePageChange=(p)=>{
let gName="";
if(genreName !== "All Genres"){
gName=genreName;
}


  setCurrentPage(p);
  let data={pageSize,currentPage:p,genreName:gName,title,sortColumn}
  dispatch(getAllMovies(data,navigate));
  }
  
  
  
  const handleGenresSelection=(genreName)=>{
    let gName="";
    if(genreName !=="All Genres") {
    gName=genreName;
      
    }
 
setGenreName(genreName);
setCurrentPage(1);
let data={pageSize,currentPage:1,genreName:gName,title,sortColumn};
dispatch(getAllMovies(data,navigate))
  }
 
const handleTitleChange=(e) =>{
setCurrentPage(1)  

let gName="";
if(genreName !="All Genres")gName=genreName

let title=e.target.value;
setTitle(title);
let data={pageSize,currentPage:1,genreName:gName,title,sortColumn};
dispatch(getAllMovies(data,navigate))
} 

const handleSort=(inSortColumn)=>{
  setSortColumn(inSortColumn);
  let gName="";
  if(genreName !="All Genres")gName=genreName

  let data={pageSize,
  currentPage,
  genreName:gName,
  title,
  sortColumn:inSortColumn,
  }
  

dispatch(getAllMovies(data,navigate))
}
return(
<div className="row m-5">
<div className="col-3 ">
<Link to ="/movies/new" className="btn btn-sm btn-primary">
Add Movie
</Link>
<br/>
<input type="text" className="m-2" onChange={ handleTitleChange}/>
<ListGroup 
 onItemSelection={handleGenresSelection} 
 itemList={[{_id:"",name:"All Genres"},...genres]}
 selectedItem={genreName}
/>
 </div>
 <div className="col">
{movies.length<=0 ? (
<p> No movies found</p>
  ) : (
<React.Fragment>
<MoviesTable movies={movies} onSort={handleSort} sortColumn={sortColumn}/>
    <Pagination
    pageSize={pageSize}
    itemsCount={moviesCount}
    currentPage={currentPage}
    onPageChange={handlePageChange}
    />
    </React.Fragment>
  )}
      </div>
      
    </div>
   
  );
}
export default Movies;