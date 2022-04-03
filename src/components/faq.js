import React from 'react';
import Navbar from './navbar';
import { motion } from "framer-motion"

export default function faq(){
    return(

        <div className='main'>
              <Navbar  class1="colorChange" class2="colorChange" c1="black" c2="black"/>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className=' container top' style={{marginTop:'100px',fontSize:'1.1rem',lineHeight:'1.7em',fontFamily:'Arvo',wordSpacing:'2px'}}>
                <h1 style={{fontFamily:'Arvo',color:'#e75480'}}><b>Pet-Adoption FAQs</b></h1>
                <p>Thank you for using Petsmart! We’re here to help you every step of the way from “just looking” at 
                    adoptable pets, to bringing your pet home, to living a long and happy life with your 
                    new family member. The following questions will take you to some of the most frequently asked FAQ's 
                    about adopting a pet that you see on Petsmart. If you can’t find the answer below, please contact 
                    us (see the bottom of this page) with any additional questions you have.</p>
                <p>
                    
                    <ol type = "1">
                    <motion.div initial={{x:-1100}} animate={{x:0}} exit={{opacity:0}} transition={{delay:0.5,duration:'0.7', type:'tween'}}>
                        <li style={{color:'#e75480'}}><b>How can I give my adoption?</b></li>
                        <p>For giving pet adoption you need to register yourself first. Then enter details of the pet.</p>
                    </motion.div>

                    <motion.div initial={{x:-1500}} animate={{x:0}} exit={{opacity:0}} transition={{delay:1.5,duration:'0.7', type:'tween'}}>
                        <li style={{color:'#e75480'}}><b>Do I Need to Apply to PetSmart?</b></li>
                        <p>No. You just have to register yourself by giving simple details about yourself to adopt a pet.</p>
                    </motion.div>

                    <motion.div initial={{x:-2000}} animate={{x:0}} exit={{opacity:0}} transition={{delay:2.5,duration:'0.7', type:'tween'}}>
                        <li style={{color:'#e75480'}}><b>Will There Be An Adoption Fee?</b></li>
                        <p>PetSmart doesn’t dictate adoption group policy, including adoption requirements and fees. If you’re interested in a 
                        specific pet, please contact the pet owner through the Pet Profile page.</p>
                    </motion.div>

                    <motion.div initial={{x:-2000}} animate={{x:0}} exit={{opacity:0}} transition={{delay:3.5,duration:'0.7', type:'tween'}}>
                        <li style={{color:'#e75480'}}><b>Do registration compulsory?</b></li>
                        <p>For adopting pet yes it is compulsory. You will have to register yourself by giving simple information 
                            of yourself. You can browse through site but for details of pet and for adoption registration is compulsory.</p>
                    </motion.div>

                    <motion.div initial={{x:-2000}} animate={{x:0}} exit={{opacity:0}} transition={{delay:4.5,duration:'0.7', type:'tween'}}>
                        <li style={{color:'#e75480'}}><b>How can I adopt pet on PetSmart?</b></li>
                        <p>For adoption you have register yourself first. Then you to the pet profile whichever pet you want ot Adopt
                            there you will find pet owner details then you can contact him for pet adoption.</p>
                    </motion.div>
                    </ol>
                </p>
            </div>
            </motion.div>
        </div>
    )
}