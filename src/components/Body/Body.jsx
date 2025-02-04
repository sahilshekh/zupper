import RestroCard from "../RestroCard/RestroCard";
import ListObj from "../../utils/mockData";

import {useState,useEffect} from "react"

const Body = () => {

  const [rated,useRated] =useState([])
  const [search,setSearch] =useState("")
  const [filter,setFilter] =useState([])


// console.log(rated,"rated")
   useEffect(()=>{
     fetchData()
   },[])

   const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0263166&lng=80.2063355&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const result =await data.json() 

     
          useRated(result.data.cards[4]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"])
          setFilter(result.data.cards[4]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"])
       
      
  }
  return (
    <div className="body">
    <input type="text"  value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <button onClick={()=>
{
    console.log(rated)
  let SearchResult =rated.filter((e)=>e.info.name.includes(search))
  setFilter(SearchResult)
}
    }>Search</button>

      <button  className="btn"  onClick={()=>{
         const res = rated.filter((item)=> item.info.avgRating>4.3)
         useRated(res)
      }
  }>
  Top Rated Restaurant</button>
      <div className="restro-container">
        {filter.filter((e)=>e.info.name.includes(search) || e.info.cuisines.includes(search) ).map((result)=>(
         
         <RestroCard key={result?.info?.id ||"not result"} resData ={result}/>
       
        ))}
      </div>
    </div>
  );
};
export default Body;
