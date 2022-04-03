import React from 'react';
import {Link} from 'react-router-dom'
import img from '../images/happy-boy-walking-his-purebred-dogs-leash-young-smiling-guy-standing-domestic-animals-cute-funny-pet-owner-happy-boy-136070652-removebg-preview.png'
import img1 from'../images/young-woman-spending-time-with-dog-female-owner-cute-domestic-animal-friendship-with-pet-concept-horizontal-full-length-vector-illustration_48369-40407-removebg-preview.png'
import './user.css';
import { motion } from "framer-motion"


export default function user() {
  return <div className='userbg' style={{backgroundColor: '#ffffff', height:'100vh',
    backgroundImage: 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)'}}>
        

      <div className='container' style={{padding:"160px"}}>
          <div className='text-center' style={{fontFamily:"Arvo",fontSize:"1.9em"}}><b>Choose Your Profile Type</b></div><br/><br/>
        <div className='row'>
            <div className='col-5'>

            <motion.div initial={{x:-1000}} animate={{x:0}} exit={{opacity:0}} transition={{duration:'1', type:'spring'}}>

                <Link to='/adopter/login' style={{color:"inherit",textDecoration:"none"}}>
                    <div className='card usercard shadow' style={{borderRadius:"20px"}}>
                    <div className='card-title text-center pt-3' style={{fontFamily:"Helvatica"}}>
                        Adopter
                    </div>
                    <div className='card-body text-center'>
                    <img  src={img1} height="200px" alt=""/><br/>
                    <p style={{fontFamily:"Arial"}}>Adopt your new furry friend.</p>
                    </div>
                </div></Link>
                </motion.div>

            </div>
            <div className='col-2'></div>
            <div className='col-5'>
            <motion.div initial={{x:1000}} animate={{x:0}} exit={{opacity:0}} transition={{duration:'1', type:'spring'}}>

            <Link to='/user/login' style={{color:"inherit",textDecoration:"none"}}>
                <div className='card usercard shadow'style={{borderRadius:"20px"}}>
                    <div className='card-title text-center pt-3' style={{fontFamily:"Helvatica"}}>
                        User
                    </div>
                    <div className='card-body text-center'>
                        
                        <img  src={img} height="200px" alt=""/><br/>
                        <p style={{fontFamily:"Arial"}}>List your pet here for adoption.</p>
                    </div>
                </div>
                </Link>
                </motion.div>
            
        </div>
      </div>
      </div>
  </div>;
}
