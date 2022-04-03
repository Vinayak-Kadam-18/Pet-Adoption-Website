import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert'
import Pets from './pets'
import { useParams } from "react-router";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function 
() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
    let { id } = useParams();
  
    const deletepet =() =>{
        swal({
            title: "Are you sure?",
            text: "Do you really want to delete our pet profile?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then(async (willDelete) => {
            if (willDelete) {
                const response = await fetch(`http://localhost:5000/profile/mypets/delete/${id}`,{
                    method:"delete"
            })
            const data = await response.json();
            if(data){
                swal({
                    title:data.message,
                    icon:"success"
                }).then(
                    ()=>navigate('/profile')
                )
            }
        } 
          });
    }



    const [Items, setItems] = useState([]);
    const getdata = async () => {
        const response = await fetch(`http://localhost:5000/pets/${id}`);
        const data = await response.json();
    
        setItems(data);
        //console.log(data);
      };

    useEffect(() => {
        getdata();
      }, []);

          const [pets, setpets] = useState(Items);
    //console.log(Items)

// const handle = (event) => {
//   let name,value;
//   name=event.target.name;
//   value=event.target.value;

//   setpets([...pets, [name]=value]);
  
 
// };
const handle =index=>event => {

  let newArr = [...Items]; // copying the old datas array
  newArr[index][event.target.name]=event.target.value; // replace e.target.value with whatever you want to change it to

  setItems(newArr);
  setpets(Items);
  console.log(Items);
 
}




const update=()=>
{

  swal({
    title: "Are you sure?",
    text: "Do you want to update pet profile with mentioned details?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then(async (willUpdate) => {
    if (willUpdate) {
        const response = await fetch(`http://localhost:5000/profile/mypets/update/${id}`,{
            method:"PUT",
            headers: { 'Content-Type':'application/json',
            'Accept':'application/json' },
            body: JSON.stringify({age:Items[0].age,breed:Items[0].breed,description:Items[0].description,gender:Items[0].gender,name:Items[0].name,type:Items[0].type,reason:Items[0].reason,city:Items[0].city,url: Items[0].url})
    })
    const data = await response.json();
    if(data){
        swal({
            title:data.message,
            icon:"success"
        }).then(
            ()=>navigate('/profile')
        )
    }
} 
  });
}


  return (
    <div>
        <Pets/>
        <div className='text-center'>
            <button className='btn btn-success m-4' onClick={handleOpen}>Update</button>
            <button className='btn btn-danger' onClick={deletepet}>Delete</button>
        </div>


{Items.map((Item,index)=>{
  return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="text-center" id="modal-modal-title" variant="h6" component="h2">
           Please fill the details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="row">
              <div className="col-6">
          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label" >Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={pets.type}
    name="type"
    label="Age"
    defaultValue={Item.type}
    onChange={handle(index)}
  >
    <MenuItem value="Dog">Dog</MenuItem>
    <MenuItem value="Cat">Cat</MenuItem>
  </Select>
</FormControl><br/><br/> 
<TextField id="outlined-basic" name="breed" label="Breed" variant="outlined" defaultValue={Item.breed} fullWidth onChange={handle(index)}/>     <br/> <br/> 
          <TextField id="outlined-basic" label="Age" variant="outlined" defaultValue={Item.age} name="age" onChange={handle(index)}  fullWidth/>     <br/> <br/> 
          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name="gender"
    value={pets.gender}
    label="Age"
    defaultValue={Item.gender}
    onChange={handle(index)}
  >
    <MenuItem value="Male">Male</MenuItem>
    <MenuItem value="Female">Female</MenuItem>
  </Select>
</FormControl><br/><br/>
<TextField id="outlined-basic" name="name" label="Name" variant="outlined" defaultValue={Item.name} fullWidth onChange={handle(index)}/>     <br/> <br/> 
<TextField id="outlined-basic" name="url" label="Image" variant="outlined" fullWidth onChange={handle(index)}/>    


          </div>
          <div className="col-6">
          <TextField fullWidth name="description" label="Description" multiline minRows={4.5} defaultValue={Item.description} maxRows={10} onChange={handle(index)}/><br/><br/>
          <TextField id="outlined-basic" name="city" label="Location" variant="outlined" defaultValue={Item.city} onChange={handle(index)} fullWidth/>     <br/> <br/> 
          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Vaccinated</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={pets.vaccinated}
    name="vaccinated"
    onChange={handle(index)}
    defaultValue={Item.vaccinated}
  >
    <MenuItem value="Yes">Yes</MenuItem>
    <MenuItem value="No">No</MenuItem>
  </Select>
</FormControl><br/><br/>
<TextField id="outlined-basic" name="reason" label="Reason" defaultValue={Item.reason}  variant="outlined" fullWidth onChange={handle(index)}/>     <br/> <br/> 


          </div>
          </div>
               </Typography>
               <div className="text-center pt-3">
               <button className="btn btn-success" onClick={update} >Update</button></div>
        </Box>
      </Modal>
)})}
    </div>
  )
}
