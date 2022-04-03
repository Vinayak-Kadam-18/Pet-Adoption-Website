import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Card from './card';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Navbar from './navbar';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { motion } from "framer-motion"


export default function () {
    useEffect(()=>{
    fetchItems()
    },[])

    const [items,setItems] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('http://localhost:5000/api');
        const item = await data.json();
        console.log(items);
        setItems(item);
       
    }
const [city, setcity] = useState([]);
const [breed, setbreed] = useState([]);
const [gender, setgender] = useState([]);
const [type, settype] = useState([]);
    const search = (e) =>
    {
      let key = e.target.value;
      
      setcity(key);
      
    }
    
    const searchbreed = (e) =>
    {
      let key = e.target.value;
      
      setbreed(key);
    }

    const searchgender = (e) =>
    {
      let gen = e.target.value;
      setgender(gen);
    }

    const searchtype = (e) =>
    {
      let type = e.target.value;
      settype(type);
    }
    
    
  return (
  <>
  <Navbar  class1="colorChange" class2="colorChange" c1="black" c2="black"/>

  <div className='adopt' style={{padding:"60px"}}>
    <h1 className="mt-4 text-center" style={{fontFamily:'Arvo'}} > Find your new <b style={{color:"#e75480"}}>Best Friend</b></h1>
    <div className='mt-5' style={{paddingBottom:"60px"}}>
<TextField style={{paddingRight:"40px"}} id="outlined-basic" name="city" label="Enter City" variant="outlined" onChange={search} /> 
<TextField style={{paddingRight:"40px"}} id="outlined-basic" name="breed" label="Enter Breed" variant="outlined" onChange={searchbreed} />  
<FormControl style={{width:"14%",paddingRight:"40px"}}>  
<InputLabel id="demo-simple-select-label">Gender</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={gender}
    label="Gender"
    onChange={searchgender}
  >
    <MenuItem value="">All</MenuItem>
    <MenuItem value="Male">Male</MenuItem>
    <MenuItem value="Female">Female</MenuItem>

  </Select>
  </FormControl>

  <FormControl style={{width:"10%"}}>  
<InputLabel id="demo-simple-select-label">Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={type}
    label="Type"
    onChange={searchtype}
  >
    <MenuItem value="">All</MenuItem>
    <MenuItem value="Dog">Dog</MenuItem>
    <MenuItem value="Cat">Cat</MenuItem>

  </Select>
  </FormControl>
   <br/><br/><hr/>


    </div>
    <div className='row' style={{paddingLeft:"20px",paddingRight:"20px"}}>
      {items.filter((item)=>{
        if(city==""){
          return item
        }
        else if(item.city.toLowerCase().includes(city.toLowerCase())){
          return item;
        }
      }).filter((item1)=>{
        if(breed==""){
          return item1
        }
        else if(item1.breed.toLowerCase().includes(breed.toLowerCase())){
          return item1;
        }
      }).filter((item2)=>{
        if(gender==""){
          return item2
        }
        else if(item2.gender.toLowerCase()===gender.toLowerCase()){
          return item2;
        }
      }).filter((item3)=>{
        if(type==""){
          return item3
        }
        else if(item3.type.toLowerCase()===type.toLowerCase()){
          return item3;
        }
      }).map(item=>
        
        (
          <div className='col-3 pb-5'>
       <Link to={`/adopt/pets/${item._id}`} style={{color:"inherit",textDecoration:'none'}} ><Card name={item.name} img={item.url} age={item.age} breed={item.breed} gender={item.gender} /> </Link>
          </div>

      ))  }
      </div>
  </div>
  </>
  )}
  