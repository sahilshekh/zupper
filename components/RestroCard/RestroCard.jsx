



const RestroCard =({resData})=>{
  
    const name = resData?.info?.name || "Default Name";
    const cuisines =resData?.info?.cuisines || "";
    const  avgRating =resData?.info?.avgRating || "";
   console.log(resData.info)
    if(name =="undefined"){
        return name=""
    }
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jwjvct05zukbsi8dadza"/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} stars</h4>
            <h4>23 Minutes</h4>

        </div>
    )
}

export default RestroCard