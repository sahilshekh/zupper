import { HeaderUl } from "../../utils/Constant"



const Header =()=>{
    return(
        <div className="Header">
            <div className="logoContainer">
                <img className="img" src={HeaderUl}/>
                
            </div>
            <div className="nav-items">
                <ul>
                <li>
                  Home 
                </li>
                <li> About Us</li>
                <li> Profile</li>
                <li> cart</li>

                </ul>
            </div>  
        </div>
    )
}

export default Header