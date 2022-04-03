import React from 'react'
import Sadimg from '../images/Sad_dog.png'
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className='text-center' style={{paddingTop:'150px'}}>
      <h1 style={{fontFamily:'Arvo',fontSize:"75px",color:'#e75480'}}><b>404</b></h1><br/>
      <h3 style={{color:'#e75480'}}>OOPS! Looks like the page you're looking for no longer exists</h3>
      <img src={Sadimg} alt=""/>
      <h5>Try Visiting home page.<Link to="/" style={{textDecoration:'none',color:'#e75480'}}> Click Here</Link></h5>
    </div>
  )
}
