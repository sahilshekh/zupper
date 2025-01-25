import RestroCard from "../RestroCard/RestroCard";
import ListObj from "../../utils/mockData";

import {useState} from "react"

const Body = () => {

  const [rated,useRated] =useState(ListObj)
   
  return (
    <div className="body">
      <button  className="btn"  onClick={()=>{
         const res = rated.filter((item)=> item.info.avgRating>4)
         useRated(res)
      }
  }>
  Top Rated Restaurant</button>
      <div className="restro-container">
        {rated.map((result)=>(
         
         <RestroCard key={result?.info?.id ||"not result"} resData ={result}/>
       
        ))}
      </div>
    </div>
  );
};
export default Body;
