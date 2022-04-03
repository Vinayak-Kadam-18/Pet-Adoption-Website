import React from 'react'
import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <div>
        <footer class="w-100 mt-1 pr-4 pl-4 flex-shrink-0">
        <div class="p-4" style={{backgroundColor:"#28282B"}}>
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">PetSmart.</h5>
                    <p class="small text-muted">Made by: Vinayak Kadam & Darshan Kannade</p>
                    <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text" style={{color:"#e75480", textDecoration:"none"}} href="#">petSmart.com</a></p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Explore</h5>
                    <ul class="list-unstyled text-muted" >
                        <li><a className='text-muted' style={{ textDecoration:"none"}} href="#">Home</a></li>
                        <li><Link className='text-muted' style={{ textDecoration:"none"}} to={'/adopt'}>Adopt</Link></li>
                        <li><Link className='text-muted' style={{ textDecoration:"none"}} to={'/user'}>Login</Link></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">About</h5>
                    <ul class="list-unstyled text-muted">
                        <li><Link className='text-muted' style={{ textDecoration:"none"}} to={'/FAQs'}>Frequent FAQ</Link></li>
                        <li><Link className='text-muted' style={{ textDecoration:"none"}} to={'/newadopter'}>Checklist</Link></li>
                        <li><Link className='text-muted' style={{ textDecoration:"none"}} to={'/covid-info'}>Covid-19</Link></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Socials</h5>
                    <div>
                        <LanguageIcon style={{marginRight:'25px'}} sx={{color:'gray'}}/> 
                        <InstagramIcon style={{marginRight:'25px'}} sx={{color:'gray'}}/> 
                        <FacebookIcon style={{marginRight:'25px'}} sx={{color:'gray'}}/> 
                        <LinkedInIcon sx={{color:'gray'}}/>   
                    </div>                 
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
