import React,{useState} from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar(props) {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 538){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
   
  return (
    <div>
      <nav className={colorChange ? `navbar ${props.class1} navbar-expand-lg fixed-top` : `navbar  ${props.class2} navbar-expand-lg fixed-top`}>
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      <Link to="/" className={colorChange ? `${props.c1}` :`${props.c2}`} style={{textDecoration:"none",fontFamily:"Amsterdam",letterSpacing:"2px",paddingLeft:"25px" }}>
        Petsmart
      </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
           
            <li className="nav-item">
              <Link to='/adopt' className={colorChange ? `nav-link ${props.c1}` :`nav-link ${props.c2}`}  >
                Adopt
              </Link>
            </li>
 
            {sessionStorage.getItem('User')?(
              <>
                         <li className="nav-item">
                         <Link to='/profile' className={colorChange ? `nav-link ${props.c1}` :`nav-link ${props.c2}`}   >
                           Profile
                         </Link>
                       </li>
            <li className="nav-item">
              <Link to='/profile' className={colorChange ? `nav-link ${props.c1}` :`nav-link ${props.c2}`}  ><AccountCircleIcon/> {sessionStorage.getItem('User')}
              </Link>
            </li>
            </>
            ):(<li className="nav-item">
            <Link to='/user' className={colorChange ? `nav-link ${props.c1}` :`nav-link ${props.c2}`}  > Login
            </Link>
          </li>)}
          </ul>
         
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
