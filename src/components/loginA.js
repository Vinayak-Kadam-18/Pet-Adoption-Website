import React,{useState} from "react";
import {Link,useNavigate} from 'react-router-dom';
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import img from "../images/faceless-happy-woman-walking-with-dog-park_74855-7312-removebg-preview.png";
import jwt_decode from "jwt-decode";
import swal from 'sweetalert'
import { motion } from "framer-motion"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Margin = styled.div`
width: 80%;
margin: auto;
padding-top: 100px;
`;

const Title = styled.p`
text-align: center;
padding: 20px;
font-family: Helvatica;
font-size:17px;
letter-spacing:5px;
color:#555555;
`;
export default function Login() {
  

const navigate = useNavigate();

const [login, setlogin] = useState({email:"",password:""});
const [errors, seterrors] = useState({email:"",password:""});


const [type, setType] = useState('password');
const [icon, setIcon] = useState(false);
const handleToggle =()=>{
  if(type==='password')
  {
    setIcon(true);
    setType('text');
  }
  else{
    setIcon(false);
    setType('password');
  }
}
  const handle=(e)=>{
      let name,value;
      name=e.target.name;
      value=e.target.value;

      setlogin({...login, [name]:value});
      

  }

    const submitlogin = async (ev)=>{
    ev.preventDefault();
    seterrors(validate(login));

    const {email, password} =login;
    const response= await fetch('http://localhost:5000/adopter/login',{
        method:"POST",
        headers:{                                //tell server that you are passing json data
            'Content-Type':'application/json',
            'Accept':'application/json'
          },
          body : JSON.stringify({                 //In body we pass the actual data in json format.JSON.stringify is a method that converts a JavaScript object into a string
            email, password              
          })
        })  

        const data = await response.json();
        //console.log(data);
        if(data.token)
        {
          const decoded = jwt_decode(data.token);
          const usernames= decoded.name;
          const username=usernames.split(" ")[0];
          const id= decoded.id;
          sessionStorage.setItem('User',username);
          sessionStorage.setItem('UserId',id);
          sessionStorage.setItem('isLoggedin',true)

          swal({
            title: "Login Succesful!",
            icon: "success",
          }).then(()=>navigate('/'));
        }
        else{
          swal({
            title: data.message,
            text: "Please Enter valid email and password!",
            icon: "error",
          });
        }

    
    

  }
const validate= (login) =>{
let error ={};
if(!login.email)
{
    error.email="Email is required";
}
if(!login.password)
{
    error.password="Password is required";
}
return error;
}

  console.log(login);
  return (
    <div  style={{background:"#F8F8FF", paddingBottom:'100px',display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
    <div className="container">
      <Margin>
      <motion.div initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} transition={{duration:'1.3',type:"spring"}}>

        <div className="card shadow-lg p-5">
          <div className="card-title">
            <Title>Please login to continue</Title>
          </div>
          <div className="card-body row ">
            <div className="col-5" style={{ paddingLeft: "50px" }}>
            <form method="" className="form">
              <TextField
                style={{width:"300px"}}
                required
                name="email"
                value={login.email}
                className="mt-5 mb-5"
                label="Email"
                type="email"
                variant="standard"
                onChange={handle}
                helperText={errors.email}
                FormHelperTextProps={{ style: { color: 'red' }}}
                
              />
              

              <TextField
                style={{width:"300px"}}
                required
                name="password"
                value={login.password}
                className="mb-5"
                label="Password"
                type={type}
                variant="standard"
                onChange={handle}
                helperText={errors.password}
                FormHelperTextProps={{ style: { color: 'red' }}}
              />
              {!icon && <VisibilityOffIcon onClick={handleToggle} fontSize="small" style={{color:'gray',float:'right',marginTop:'20px'}}/> }
              {icon && <VisibilityIcon onClick={handleToggle} fontSize="small" style={{color:'gray',float:'right',marginTop:'20px'}}/> }
              
              <br />
              <div className="text-center">
              <Link  to='/register/adopter' style={{color:'purple',marginRight:'auto',textDecoration:'none'}}>Don't have an account? Sign in!</Link>
              </div>
              <br />
              <div style={{ textAlign: "center" }}>
                <Button type="submit" variant="contained" endIcon={<LockOpenIcon />} onClick={submitlogin}>
                  Login
                </Button>
              </div>
              </form>
            </div>
            <div className="col-2"></div>
            <div className="col-5 text-center" style={{right:"120px"}}>
                <img src={img} height="90%"/>
            </div>
          </div>
        </div>
        </motion.div>
      </Margin>
    </div>
    </div>
  );
}
