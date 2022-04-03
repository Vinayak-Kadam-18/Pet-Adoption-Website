import React, { useState , useEffect} from 'react';

import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import {  Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Modal from '@mui/material/Modal';
import swal from 'sweetalert';

export default function DetailCard(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
 
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'white',
        boxShadow: 24,
        p: 4,

      };
      // //.log(props);
const{id, name, age, breed, gender,url,description,owner,city,contact,reason,characterstics, vaccinated} = props;
//console.log(characterstics)


const Img = styled.img`
  max-height:90%;
  max-width:90%;
  display:block;
  border-radius:15px;
  margin-top:-10px
  `
  const Heading = styled.p`
  font-weight:bold;
  font-family:'Arvo', serif;
  font-size:25px;
  color:#e75480
  `

  const Columnitems = styled.p`
  line-height:2em;
  font-family:Arial;
  font-size:19px
  `
  const [ownerinformation, setownerinformation] = useState([]);

const ownerinfo = async ()=>{
    const response = await fetch(`http://localhost:5000/owner/${owner}`)
    const data = await response.json();
    setownerinformation(data);
   
    
}

const handlefunc= async ()=>{
  if(sessionStorage.getItem('isLoggedin')){
    ownerinfo();
handleOpen();

      

  }
  else{
    swal({
      title:"Login Required",
      text:"Please login as Adopter to view contact",
      icon:"warning"
    })
  }
}

const [save, setSave] = useState([]);
const user = sessionStorage.getItem('UserId');
//console.log(sessionStorage.getItem("UserId"));


useEffect(() => {
  if(sessionStorage.getItem('isLoggedin')){
  getSave()
  }
 }, [])

 useEffect(() => {
  setFav(save.includes(id) ? true : false)
 }, [save])

const getSave =async ()=>
{
  const responses = await fetch(
    `http://localhost:5000/adopter/favourite/${sessionStorage.getItem("UserId") }`
  );
  const dt = await responses.json();
  

  dt.map((obj) => { 
    return (

      obj.favourite.map(async(subobj)=>{

       
        setSave(save => [...save,subobj]);
        ////.log(newArr);

        
        
      })
    )
    
  
})
}


const [ fav, setFav] = useState();



const handleFav = async ()=>{
  setFav(!fav);
  if(fav == false){
    const response = await fetch(`http://localhost:5000/adopter/favourite`,{
      method:"PUT",
      headers:{                                //tell server that you are passing json data
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
        body : JSON.stringify({                 //In body we pass the actual data in json format.JSON.stringify is a method that converts a JavaScript object into a string
          id, user             
        })
      })  
    const data = await response.json();
    if(data.status===200){
      swal({
        title: data.message,
        text:"Visit Profile to see all saved Profiles !",
        icon: "success",
      })
    }
  }else{
    const response = await fetch(`http://localhost:5000/adopter/favourite/remove`,{
      method:"delete",
      headers:{                                //tell server that you are passing json data
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body : JSON.stringify({                 //In body we pass the actual data in json format.JSON.stringify is a method that converts a JavaScript object into a string
        id, user             
      })
})
    const data = await response.json();
    if(data){
    swal({
      title:data.message,
      icon:"success"
     })
  
}

  }
 
}


  return (
      <div className="container mt-5">
              <div className="card shadow">
                <div className="container p-5">
                  <div
                    className="card-title text-center"
                    style={{ fontFamily: "Arvo", color:"#e75480" }}
                  >
                    <h2>
                      <b>Adopt {name}</b>
                    </h2>
                  </div>
                  <div className="card-body pt-5">
                    <div className="row">
        

                      <div className="col-4">
                        <Columnitems>
                        <Heading>About Me</Heading>
                          <b>Name :</b> {name} <br />
                          <b>Age :</b> {age} years
                          <br />
                          <b>Breed :</b> {breed} <br />
                        </Columnitems>
                      </div>

                      <div className="col-4 pt-3">
                        <Columnitems>
                          <br/>
                          <b>Gender :</b> {gender} <br />
                          <b>Neutered :</b> No
                          <br />
                          <b>vaccinated :</b> {vaccinated} <br />
                        </Columnitems>
                      </div>
                      <div className="col-4">
                        <Img src={url} alt="Error"></Img>
                      </div>
                    </div>
                    <hr />
                    <div className="row mt-3">
                      <Heading>Info</Heading>

                                           
                      {characterstics.map(char=>{
                        return char.map(subchar=>{
                          return (
                            <>
                            {subchar &&
                           <div className='col-4'>
                         <Columnitems>
                         <DoneIcon color="success" />
                         {subchar}           
                         </Columnitems> 

                       </div> }
                       </>)
                       })
                      })}
                      
                      {/* <div className="col-4">
                        <Columnitems>
                          <CloseIcon color="error" /> Not Spayed
                          <br />
                          <CloseIcon color="error" /> Not Good with Cats
                          <br />
                        </Columnitems>
                    </div> */}
                    </div> 
                    <hr />
                    <Heading>Additional Info</Heading>
                    <p style={{ fontFamily: "Arial", fontSize: "19px" }}>
                      {description}{" "}
                    </p>
                    <hr />

                    <Heading>Reason</Heading>
                    <p style={{ fontFamily: "Arial", fontSize: "19px" }}>
                      {reason}
                    </p>
                    <hr/>
                    <Heading>Location</Heading>
                    <p style={{ fontFamily: "Arial", fontSize: "19px" }}>
                      {city}
                    </p>
                    <br />
                    
                    <div className="text-center">
                    {contact==="TRUE" &&
                      <button
                        type='button'
                        className="btn  p-2"
                        style={{ borderRadius: "5px",backgroundColor:"#e75480",color:"white" }}
                        onClick={handlefunc}
                      >
                        
                        Contact Me!

                      </button>
                      
                    } 
                    {user ? (
                    <>
                      {fav && 
                    <IconButton onClick={() => { handleFav()}}  aria-label="delete" >
                      <div className="text-center">
                      <div  className="btn btn-danger">
                    <FavoriteOutlinedIcon   />&nbsp;
                    Saved !
                    </div></div>
                    </IconButton>
                    }   
                    
                    { !fav &&
                    <IconButton onClick={() => { handleFav() }} aria-label="delete" >
                     <div  className='btn btn-outline-danger'>

                    <FavoriteOutlinedIcon />&nbsp;
                    Add to Favourite
                    </div>
                    </IconButton>
                    }
                    </>
                    )
                    :
                    ''}
                      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <CloseIcon type="button" style={{float:"right"}} onClick={handleClose}/>
          <Typography className='text-center' id="modal-modal-title" variant="h6" component="h2" style={{fontFamily: "Arvo", color:"#e75480",fontWeight:"bold",fontSize:"23px"}}>
            Owners Info
          </Typography><br/>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {ownerinformation.map(item=>(
        <>
        <p><b>Name:    </b>{item.name} </p> 
        <p><b>Email: </b>{item.email}</p> 
        <p><b>Contact: </b>{item.contact}</p>  
</>
      ))} 
      
          </Typography>
        </Box>
      </Modal>
                    </div>
                  </div>
                </div>
              </div>
  </div>
  )}
