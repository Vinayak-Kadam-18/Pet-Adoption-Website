import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import Card from'./card';
import col1img from '../images/kids-dogs-happy-children-playing-hugging-their-funny-pets-vector-cartoon-puppy-dog-domestic-animals-girl-boy-person-child-156391699-removebg-preview (1).png'
import search from '../images/icons8-search-48.png';
import hours24 from '../images/24-hours.png';
import pet from '../images/icons8-pet-48.png';
import { Link } from 'react-router-dom';
import Footer from '../components/footer'
import AOS from "aos";
import "aos/dist/aos.css";
import './body.css'


AOS.init();
export default function Body() {
    const Heading = styled.p`
   font-family: 'Arvo', serif;
   display:flex;
   font-weight:700;
   justify-content:center;
   align-center:center;
   font-size:40px
;
    `;

    const Jumbo =styled.div`
    background-image: linear-gradient(to top, #F8F8FF 0%, #F8F8FF 100%);
    font-family:'Arvo'
    `;
    useEffect(()=>{
        fetchItems()
        },[]) 
    const [items,setItems] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('http://localhost:5000/api');
        const item = await data.json();
        //console.log(item);
        setItems(item);
       
    }
    return (
        <div>
        <div className='container'>

           <Heading className='' data-aos="fade-down">  <b style={{color:"#e75480"}}>Featured&nbsp; </b> Pets for You</Heading>
           <div className='container pt-3'>
           <div className='row' data-aos="fade-up">

    {items.slice(0,4).map(item=>(
          <div className='col-3' >
       <Link to={`/adopt/pets/${item._id}`} style={{color:"inherit",textDecoration:'none'}} ><Card  name={item.name} img={item.url} age={item.age} breed={item.breed} gender={item.gender} /> </Link>
          </div>

      ))}
            </div>
           </div><br/>
           <Link to="/adopt" style={{color:'purple'}}><h5 className='' style={{float:'right', fontFamily: 'Arvo'}}>View all</h5></Link>
        <br/>
        </div>
        
        <div className='container'><br/><hr/></div>
        <br/>
        <Heading className='mt-5' data-aos="flip-up"><b style={{color:"#e75480"}}>Planning&nbsp; </b> to adopt pet?</Heading>
        <br/>
        <div className='container'>
            <div className='row pt-5' style={{fontFamily:'Arvo'}}>
                <div className='col text-center'  data-aos="fade-up">
                  
                    <h4 style={{color:'#09203f'}}>Checklist for New Adopter</h4>
                    <p>Help make the transition, as smooth as possible.</p>
                    <Link to='/newadopter'>
                    <button className='btn m-4 pr-3 b3' style={{border:'2px solid #f9748f',borderRadius:'20px',width:'40%'}} ><b>Learn More</b></button>
                    </Link>
                    </div>
                <div className='col text-center' data-aos="fade-up">
                    <h4 style={{color:'#09203f'}}>Covid-19 Resources</h4>
                    <p>Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now.</p>
                    <Link to="/covid-info"><button className='btn m-4 pr-3 b3' style={{border:'2px solid #f9748f',borderRadius:'20px',width:'40%'}}><b>Learn More</b></button>
                    </Link>
                    </div>
                <div className='col text-center' data-aos="fade-up">
                   <h4 style={{color:'#09203f'}}> Pet adoption FAQs</h4>
                   <p>Get answers to questions you haven't thought of.</p>
                   <Link to="/FAQs" ><button className='btn m-4 pr-3 b3' style={{border:'2px solid #f9748f',borderRadius:'20px',width:'40%'}}><b>Learn More</b></button>
        </Link>
                    </div>

            </div>
        </div><br/><br/>
        <Jumbo className='mt-5'>
           <Heading className='p-5' style={{color:"#e75480"}}>Your Pet adoption Journey</Heading>
           <div className='row'>
               <div className='col-7 text-center'>
        <img src={col1img} alt="" />
               </div>
               <div className='col-5 p-2'>
                   <img src={search} style={{float:"left"}} />
                   <div style={{overflow:'hidden',paddingRight:'2em'}}>
                   <h5>Search Pet</h5>
                   <p >Adopt a dog or cat who's right for you. Simply enter your city above to start your search.</p>
                   </div> <br/>

                   <img src={hours24} style={{float:"left"}} height='11%'/>
                   <div style={{overflow:'hidden',paddingLeft:'10px',paddingRight:'2em'}}>
                   <h5>Connect</h5>
                   <p >Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet</p>
                   </div><br/>

                   <img src={pet} style={{float:"left"}} height='11%'/>
                   <div style={{overflow:'hidden',paddingLeft:'10px',paddingRight:'2em'}}>
                   <h5>AdoptLove</h5>
                   <p >The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</p>
                   </div><br/>
                </div>
           </div>
        </Jumbo>
       <Footer />




   
    

        </div>
        
    )
}
