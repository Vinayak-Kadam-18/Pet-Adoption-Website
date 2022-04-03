import React from 'react';
import {Link} from 'react-router-dom'
import './header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import dog from '../images/flouffy-g2FtlFrc164-unsplash-removebg-preview.png'
import wave from '../images/wave1.png'

export default function home() {
    return (
        <div className='home'>
        <div className='con'>
            <div className='row' >
            <div className='col-8' style={{paddingTop:"11ch",paddingLeft:"11ch",}}>
                <span className='heading' >Looking For Pet?</span><br/>
                <p className='txt1' style={{fontFamily:"Arvo"}}><b>INSTEAD OF BUYING EXPENSIVE PETS, ADOPT THEM!</b></p>
                <p className='heading3'> “Saving one dog will not change the world,<br/>  but surely for that one dog, the world<br/> will change forever.”</p>
                <Link to="/adopt" ><button className='btn b1' style={{color: "black",
     padding:"11px",width:"20ch",borderRadius:"25px",fontFamily:"Arial"}}><b>Explore</b></button></Link>
               

            </div>
            <div className='col-3' style={{padding:"130px"}}>
            <img src={dog} className='img' height="430px" />
            </div>

        </div>
        <svg id="wave" className='img1' viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg"><path  fill="#fff" d="M0,30L60,40C120,50,240,70,360,65C480,60,600,30,720,15C840,0,960,0,1080,12.5C1200,25,1320,50,1440,72.5C1560,95,1680,115,1800,125C1920,135,2040,135,2160,117.5C2280,100,2400,65,2520,52.5C2640,40,2760,50,2880,57.5C3000,65,3120,70,3240,62.5C3360,55,3480,35,3600,35C3720,35,3840,55,3960,52.5C4080,50,4200,25,4320,15C4440,5,4560,10,4680,32.5C4800,55,4920,95,5040,95C5160,95,5280,55,5400,37.5C5520,20,5640,25,5760,45C5880,65,6000,100,6120,102.5C6240,105,6360,75,6480,52.5C6600,30,6720,15,6840,7.5C6960,0,7080,0,7200,5C7320,10,7440,20,7560,25C7680,30,7800,30,7920,42.5C8040,55,8160,80,8280,92.5C8400,105,8520,105,8580,105L8640,105L8640,150L8580,150C8520,150,8400,150,8280,150C8160,150,8040,150,7920,150C7800,150,7680,150,7560,150C7440,150,7320,150,7200,150C7080,150,6960,150,6840,150C6720,150,6600,150,6480,150C6360,150,6240,150,6120,150C6000,150,5880,150,5760,150C5640,150,5520,150,5400,150C5280,150,5160,150,5040,150C4920,150,4800,150,4680,150C4560,150,4440,150,4320,150C4200,150,4080,150,3960,150C3840,150,3720,150,3600,150C3480,150,3360,150,3240,150C3120,150,3000,150,2880,150C2760,150,2640,150,2520,150C2400,150,2280,150,2160,150C2040,150,1920,150,1800,150C1680,150,1560,150,1440,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z"></path></svg>      
          {/* <img src={wave} className="img1" />  */}

        
       </div>
       
       
      
       
       

 </div>



)
}
