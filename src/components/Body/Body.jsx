import RestroCard from "../RestroCard/RestroCard";
import ListObj from "../../utils/mockData";

import {useState,useEffect} from "react"

const Body = () => {

  const [rated,useRated] =useState([])
// console.log(rated,"rated")
   useEffect(()=>{
     fetchData()
   },[])

   const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0263166&lng=80.2063355&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const result =await data.json() 

     
          useRated(result.data.cards[4]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"])
          
       
      
  }
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
