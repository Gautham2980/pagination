import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'


function Details(){
    const [update,setUpdate]=useState([])

    useEffect(()=>{

        // fetch('https://api.tvmaze.com/seasons/1/episodes')
        // .then((res)=>{
        //     return res.json()
           
        // })

        // .then((data)=>setUpdate(data))

        // .catch((err)=>console.log(err))


        axios.get("https://api.tvmaze.com/seasons/1/episodes")
        .then((res)=>{
            // console.log(res.data);
            setUpdate(res.data)
        })

    })

    const params=useParams();
    const item=update.find((e)=>e.id===parseInt(params.id))
    console.log(item);
    return(
        <div className="card-col">
          <div className="card-img">
          <img src={item?.image.medium} />

          </div>

            <h5>Movie Name:{item?.name}</h5>
            <h5>Ratings:{item?.rating.average}</h5>
            <h5>Airdate:{item?.airdate}</h5>
            <h5>Airtime:{item?.airtime}</h5>
            <h5>Runtime:{item?.runtime}</h5>


        </div>
    )
}

export default Details