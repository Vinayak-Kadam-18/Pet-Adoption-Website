import React, {useEffect} from 'react'
import Navbar from './navbar'
import { motion } from "framer-motion"

export default function Checklist() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div style={{backgroundColor:'#F8F8FF'}}>
      <Navbar  class1="colorChange" class2="colorChange" c1="black" c2="black"/>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      
        <div className='container top' style={{paddingTop:'100px',fontSize:'1rem',lineHeight:'1.7em',fontFamily:'Arvo',wordSpacing:'2px'}}>
        <div className='card p-5 shadow' style={{borderRadius:'20px'}}>
        <h1 style={{fontFamily:'Arvo',color:'#e75480'}}><b>Checklist for New Adopters</b></h1>
        <p>
        Congratulations on adopting a pet! You are embarking on a wonderful and rewarding relationship. Because adopting a new pet comes with a 
        lot of change for both pet and pet parent, we've compiled a checklist to help make the transition as smooth as possible.
        </p><br/>

        {/* <motion.div initial={{x:-1000}} animate={{x:0}} exit={{opacity:0}} transition={{delay:0.5,duration:'0.7', type:'tween'}}> */}

                        <h4 style={{fontFamily:'Arvo',color:'#e75480'}}><b>Questions for All Adopters:</b></h4>
                        <ul>
                            <li>Do you have any other pets and how will they react to a new pet?</li>
                            <li>Is your current residence suited to the pet you're considering?</li>
                            <li>How will your social life or work obligations affect your ability to care for a pet?</li>
                            <li>Do you have a plan for your new pet during vacations and/or work travel?</li>
                            <li>How do the people you live with feel about having a pet in the house?</li>
                            <li>Is there an adult in the family who has agreed to be ultimately responsible for the pet's care?</li>
                        </ul>
         {/* </motion.div> */}
                        <br/>

                        <div className='row'>
                            <div className='col-6'>
                            {/* <motion.div initial={{x:-1000}} animate={{x:0}} exit={{opacity:0}} transition={{delay:1.5,duration:'0.7', type:'tween'}}> */}

                        <h4 style={{fontFamily:'Arvo',color:'#e75480'}}><b>Necessary Items for Dogs:</b></h4>
                        <ul>
                            <li>Food and water bowls</li>
                            <li>Collar</li>
                            <li>Four to six-foot leash</li>
                            <li>ID tag with your phone number</li>
                            <li>First-aid supplies</li>
                        </ul>
                        {/* </motion.div> */}
                        </div>
                        <div className='col-6'>
                        {/* <motion.div initial={{x:1000}} animate={{x:0}} exit={{opacity:0}} transition={{delay:1.5,duration:'0.7', type:'tween'}}> */}

                        <h4 style={{fontFamily:'Arvo',color:'#e75480'}}><b>Necessary Items for Cats:</b></h4>
                        <ul>
                            <li>Food and water bowls</li>
                            <li>Kitty litter</li>
                            <li>Nail clippers</li>
                            <li>First-aid supplies</li>
                            <li>Toys</li>
                            {/*  */}
                        </ul>
                        {/* </motion.div> */}
                        </div>
                        </div>
                    </div>
                    </div>
    </motion.div>
   
        </div>
  
  )
}
