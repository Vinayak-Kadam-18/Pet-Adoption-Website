import React, { useEffect, useState } from "react";
import Navbar from './navbar'
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import img from "../images/blank-profile-picture-g1738e6f86_1280.png";
import Profilecard from "./profilecard";
import Card from "./card";
import swal from 'sweetalert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { arr } from "../components/city";
import { motion } from "framer-motion"
import CloseIcon from '@mui/icons-material/Close';

export default function ProfileA() {
  const [items, setitems] = useState([]);
  const [selectedState, setSelectedState] = useState();

  const [pet, setpet] = useState([]);

  /* modal */
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,


  };

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openP, setOpenP] = React.useState(false);
  const handleOpenProfile = () => setOpenP(true);
  const handleCloseProfile = () => setOpenP(false);
  //

//Modal form

const [pets, setpets] = useState([]);


const handle = (event) => {
  let name,value;
  name=event.target.name;
  value=event.target.value;

  setpets({...pets, [name]:value});
 
};
console.log(pets);
  useEffect(() => {
    getData();
    getPet()
 
  }, []);
//console.log(sessionStorage.getItem("Userprofile"));
  const getData = async () => {
    const response = await fetch(
      `http://localhost:5000/adopter/profile/${sessionStorage.getItem(
        "UserId"
      )}`
    );
    const data = await response.json();
    setitems(data);
    console.log(data);
  };

  const getPet = async () => {
    const responses = await fetch(
      `http://localhost:5000/adopter/favourite/${sessionStorage.getItem(
        "UserId") }`
    );
    const dt = await responses.json();

    //setpet(dt);
    console.log(dt);
    dt.map((item) => { 
      return (

        item.favourite.map(async (subitem)=>{
          const responses = await fetch(
            `http://localhost:5000/adopter/favourite/details/${subitem}`
          );
          const details = await responses.json();
         
          setpet(pet=>[...pet,...details]);
          //console.log(newArr);

          
          
        })
      )
    
    
    })
    
  };
console.log(pet)

  //Upload Pet
  const submit= async (e)=>{
    e.preventDefault();

    const {type, breed, age, gender, name, description, location, vaccinated, reason}=pets;
    const response= await fetch('http://localhost:5000/pet/upload',{
      method:"POST",
      headers:{                                //tell server that you are passing json data
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
        body : JSON.stringify({                 //In body we pass the actual data in json format.JSON.stringify is a method that converts a JavaScript object into a string
          type, breed, age, gender, name, description, location, vaccinated, reason ,owner:sessionStorage.getItem('Userprofile')  
        })
      })  

      const data = await response.json();
      if(data.status===200){
        swal({
          title: "Uploaded Succesful!",
          icon: "success",
        }).then({handleClose}).then(() => window.location.reload(false))
      }
      



    
}
const [user, setUser] = useState([]);

  const handleUser = (event) => {
      
         let myarr = [...items]; // copying the old datas array
         myarr[0][event.target.name]=event.target.value; // replace e.target.value with whatever you want to change it to
        setUser(myarr);
        
       }
       const selectState = (event) =>
       {
         setSelectedState(event.target.value);
         let myarr = [...items]; // copying the old datas array
         myarr[0][event.target.name]=event.target.value; // replace e.target.value with whatever you want to change it to
        setUser(myarr);;
        
       }
       const updateUser = () =>
       {
        swal({
          title: "Are you sure?",
          text: "Do you want to update your profile with mentioned details?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then(async (willUpdate) => {
          if (willUpdate) {
              const response = await fetch(`http://localhost:5000/profile/adopter/update/${sessionStorage.getItem("UserId") }`,{
                  method:"PUT",
                  headers: { 'Content-Type':'application/json',
                  'Accept':'application/json' },
                  body: JSON.stringify({name:user[0].name,contact:user[0].contact,city:user[0].city,state:user[0].state})
          })
          const data = await response.json();
          if(data){
              swal({
                  title:data.message,
                  icon:"success"
              }).then(
                  handleCloseProfile
              )
          }
      } 
        });
       }

       console.log(arr[selectedState])
  const logout = () =>
  {
    swal({
      title:"Are you sure you want to log out?",
      icon:"warning",
      buttons: true,
      dangerMode: true,
  }).then(willLogout =>{
    if(willLogout)
    {
      sessionStorage.removeItem('User');
      sessionStorage.removeItem('UserId');
      sessionStorage.removeItem('isLoggedin');
      navigate('/')
    }
  })
  }


  return (
    <>
  <Navbar  class1="colorChange" class2="colorChange" c1="black" c2="black"/>
  <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>

<div style={{background:"#FAF9F6",height:'100%'}}>
  
    <div className="container" style={{paddingTop:"80px"}}>
    <div style={{float:"right",marginTop:"30px"}}>
     <button type="button" className="btn btn-danger" onClick={logout}><LogoutTwoToneIcon />&nbsp;Logout</button>
     </div>
    
     <h2 className="text-center p-4"style={{fontFamily: "Arvo", color:"#e75480",fontWeight:"bold"}}>My Profile</h2>
     
     <ModeEditOutlineTwoToneIcon type="button" style={{float:"right"}} onClick={handleOpenProfile} />

     {items.map((item) => {
          return (
     <Modal
        open={openP}
        onClose={handleCloseProfile}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon type="button" style={{float:"right"}} onClick={handleCloseProfile} />
          <Typography className="text-center" id="modal-modal-title" variant="h6" component="h2">
           Please Fill The Details
          </Typography>
          <br/>
        

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="row">
              <div className="col-6">
          
          <TextField id="outlined-basic" name="name" label="Name" variant="outlined" fullWidth onChange={handleUser} defaultValue={item.name}/>     <br/> <br/> 
          <TextField id="outlined-basic" label="Email" variant="outlined" name="email" onChange={handleUser}  fullWidth disabled defaultValue={item.email}/>     <br/> <br/> 
          
          <TextField id="outlined-basic" name="contact" label="Contact" variant="outlined" fullWidth onChange={handleUser} defaultValue={item.contact}/>     <br/> <br/> 
          


          </div>
          <div className="col-6">
          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">State</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    variant="outlined"
    id="demo-simple-select"
    name="state"
    value={user.state}
    defaultValue={item.state}
    label="City"
    
    onChange={selectState}
  >
                            {Object.keys(arr).map(function(key) {
                           return <MenuItem value={key}>{key}</MenuItem>
                        })}
  </Select>
</FormControl><br/><br/>

          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">City</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    variant="outlined"
    id="demo-simple-select"
    name="city"
    value={user.city}
    defaultValue={item.city}
    label="City"
    
    onChange={handleUser}
  >
       {selectedState &&   arr[selectedState]?.map((cities)=>{
    return  <MenuItem value={cities}>{cities}</MenuItem>
   

})}


  </Select>
</FormControl><br/><br/>

        
          </div>
          </div>
               </Typography>
               <div className="text-center">
               <button className="btn btn-success"onClick={updateUser} >Update</button></div>
        </Box>
      </Modal>
   )})}
   
        {items.map((item) => {
          return (
           <Profilecard img={item.url}  name={item.name} email={item.email} contact={item.contact} city={item.city} state={item.state} age={item.age}  />
          );
        })}
        <br/>
        <hr/>
        {pet.length > 0 &&
        <div className='row pt-3' > 
        <h2 className="text-center p-4"style={{fontFamily: "Arvo", color:"#e75480",fontWeight:"bold"}}>Your Favorite Pets</h2>
        <br/>

      {pet.map(pet=>(
          <div className='col-3'>
       <Link to={`/adopt/pets/${pet._id}`} style={{color:"inherit",textDecoration:'none'}} ><Card name={pet.name} img={pet.url} age={pet.age} breed={pet.breed} gender={pet.gender}/> </Link>
          </div>

      ))}
      </div> }
       {pet.length===0 && 
      <div className="text-center">        <h2 className="text-center p-4"style={{fontFamily:"Helvatica", color:"Grey"}}>Please save your favourite pets profiles !</h2>
      </div>}
      <br/>
      
    </div>
    </div>
    <br/>
    </motion.div>
    </>
  );
}

