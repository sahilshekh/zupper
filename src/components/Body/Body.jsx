import RestroCard from "../RestroCard/RestroCard";
import ListObjApp.js from "../../utils/mockData";

const Body = () => {

  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="restro-container">
        {ListObj.map((result)=>(
         
         <RestroCard key={result?.info?.id ||"not result"} resData ={result}/>
       
        ))}
      </div>
    </div>
  );
};
export default Body;
