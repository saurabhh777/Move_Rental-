import { Outlet } from "react-router-dom";
import NavBar from  "./Components/navBar";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loadLogin} from "./actions/logins"
  
function App(){
  let dispatch=useDispatch();
  useEffect(()=>dispatch(loadLogin()));
   
  return(
  <div>
    <NavBar/>
    
    <Outlet/>
  </div>
  );
}
export default App;




