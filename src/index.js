import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import  Customers from "./Components/Customers" ;
import  Genres from "./Components/Genres" ;
import  Login    from "./Components/Login" ;
import  Movies from "./Components/Movies" ;
import  Register from "./Components/Register" ;
import  Rentals from "./Components/Rentals" ;
import GenreForm from './Components/GenreForm';
import Error from "./Components/error";
import CustomerForm from './Components/CustomerForm';
import MovieForm from './Components/MovieForm';
import RentalForm from './Components/RentalForm';
import NotFound from './Components/notFound';
import App from './App';
import reportWebVitals from './reportWebVitals';
import   "bootstrap/dist/css/bootstrap.css"
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import{ BrowserRouter,Routes,Route} from "react-router-dom"
import { Provider } from 'react-redux';


ReactDOM.render(
<React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
  
  <Routes>
    <Route path ="/"element={<App/>}>
    <Route path ="genres" element={<Genres/>}/>
    <Route path ="genres/:id" element={<GenreForm/>}/>
    <Route path ="genres/new" element={<GenreForm/>}/>
    <Route path ="customers" element={<Customers/>}/>
    <Route path ="customers/:id" element={<CustomerForm/>}/>
    <Route path ="customers/new" element={<CustomerForm/>}/>
    <Route path ="movies" element={<Movies/>}/>
    <Route path ="movies/:id" element={<MovieForm/>}/>
    <Route path ="movies/new" element={<MovieForm/>}/>
    <Route path ="rentals" element={<Rentals/>}/>
    <Route path ="rentals/:id" element={<RentalForm/>}/>
    <Route path ="rentals/new" element={<RentalForm/>}/>
    <Route path ="login" element={<Login/>}/>
    <Route path ="notFound" element={<NotFound/>}/>
    <Route path ="register" element={<Register/>}/>
    <Route path ="error" element={<Error/>}/>
</Route>
  </Routes>
  </BrowserRouter>
  </Provider>
</React.StrictMode>,
 
  document.getElementById('root')
);
reportWebVitals();
