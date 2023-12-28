import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Details from './Details';
import Api from './Api';
import Carousal from './Carousal';
import Banner from './Banner';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const currentPost=update.slice(firstPage,lastPost)
// const [update,setUpdate]=useState([])
// const[currentPage,setCurrentPage]=useState(1)
// const[perPage,setPerPage]=useState(6)
// const lastPost=currentPage*perPage;
// const firstPage=lastPost-perPage;
root.render(
  
  <React.StrictMode>
    <Banner />
 
    <Carousal />
   
    <BrowserRouter>
    
    <Routes>
   
      <Route path='/' element={<Api />}></Route>
      <Route path='/details/:id' element={<Details />}></Route>

    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
