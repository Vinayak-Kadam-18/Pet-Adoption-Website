import React from 'react';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import img from "../images/blank-profile-picture-g1738e6f86_1280.png";
export default function profilecard(props) {
  return <div>
      <div className='container mt-5'>
      <div
                className="row"
                style={{
                  fontFamily: "Arvo",
                  letterSpacing: "1.5px",
                  lineHeight: "2em",
                  fontSize:"17px"
            
                }}
              >
                <div className="col-4 pb-4 text-center">
                  {props.img ? <img src={props.img} className="shadow-lg" style={{borderRadius:"10%"}} alt="" height="180px" />
                  : <img src={img}  style={{borderRadius:"10%"}} alt="" height="190px" />
              }
                </div>

                {/* <div className="col-4 pt-2">
                  <p><b>Name: </b>{props.name} </p>
                  <p><b>Email: </b>{props.email}</p>
                  <p><b>Contact: </b>{props.contact}</p>
                </div>

                <div className='col-4 pt-2'>
                  <p><b>City: </b>{props.city} </p>
                  <p><b>State: </b>{props.state}</p>
                  <p><b>Contact: </b>{props.contact}</p>
                  </div> */}
                  <div className='col-1'></div>
                <div className='col-7'>
                  <div><h2 style={{fontFamily:'Arvo'}}><b>{props.name}</b></h2> 
                  <p className='text-muted' style={{fontSize:'16px'}}><LocationOnSharpIcon  />&nbsp;&nbsp;{props.city},{props.state}</p>
                  <p><CallSharpIcon className='text-muted'/> : {props.contact} &nbsp;&nbsp;&nbsp; <span><MailSharpIcon className='text-muted' /> : {props.email}</span> </p>
                  
                  </div>
                  </div>
              </div>
      </div>
  </div>;
}
