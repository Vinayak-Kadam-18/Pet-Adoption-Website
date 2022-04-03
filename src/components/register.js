import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import img from "../images/vecteezy_people-and-pets-cat-and-dog-with-man-and-woman-pet-owner_-removebg-preview.png";
import { useParams } from "react-router";
import swal from "sweetalert";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { arr } from "../components/city";
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
  font-size: 17px;
  letter-spacing: 5px;
  color: #555555;
`;
export default function Register() {
  let { type } = useParams();
  const navigate = useNavigate();

const [typee, setType] = useState('password');
const [icon, setIcon] = useState(false);
const handleToggle =()=>{
  if(typee==='password')
  {
    setIcon(true);
    setType('text');
  }
  else{
    setIcon(false);
    setType('password');
  }
}

  const [register, setregister] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    contact:"",
    city:"",
    state:"",
    url:""
  });
  const [errors, seterrors] = useState({});
  const [selectedState, setSelectedState] = useState("");

  console.log(register);
  let flag;

  function validate(register) {
    let error = { name: "", email: "", password: "", confirmpassword: "" };
    flag=true;
    // if(!register.name)
    // {
    //     error.name="Name is required";
    // }

    // if(!register.email)
    // {
    //     error.email="Email is required";
    // }

    // if(!register.password)
    // {
    //     error.password="Password is required";
    // }
    if (
      !register.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      error.email = "Please enter valid email";
      flag = false;
    }
    if(!register.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/))
{
  error.password = "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one numbe"
  flag=false;
}
    if (register.password !== register.confirmpassword) {
      error.confirmpassword = "Password dosen't Match";
      flag=false;
    }

    return error;
  }

  const handle = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;

    setregister({ ...register, [name]: value });
  };
const states= register.state;
  const submitlogin = async (ev) => {
    ev.preventDefault();

    seterrors(validate(register));

    const { name, email,contact,city,state, password, confirmpassword ,url} = register;
    console.log(register)

    if (register.password === register.confirmpassword && flag === true) {
      if (type === "adopter") {
        const response = await fetch("http://localhost:5000/register/adopter", {
          method: "POST",
          headers: {
            //tell server that you are passing json data
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            //In body we pass the actual data in json format.JSON.stringify is a method that converts a JavaScript object into a string
            name,
            email,
            contact,city,state,
            password,
            confirmpassword,
            url
          }),
        });

        const data = await response.json();

        if (data.status === 200) {
          swal({
            title: data.message,
            icon: "success",
          }).then(navigate("/adopter/login"));
        } else {
          swal({
            title: data.message,
            icon: "error",
          });
        }
      } else if (type === "user") {
        const response = await fetch("http://localhost:5000/register/user", {
          method: "POST",
          headers: {
            //tell server that you are passing json data
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            //In body we pass the actual data in json format.JSON.stringify is a method that converts a JavaScript object into a string
            name,
            email,
            password,
            confirmpassword,
            contact,
            city,
            state,
            url
          }),
        });

        const data = await response.json();

        if (data.status === 200) {
          swal({
            title: data.message,
            icon: "success",
          }).then(navigate("/user/login"));
        } else {
          swal({
            title: data.message,
            icon: "error",
          });
        }
      }
    }
  };

  const selectState = (e) =>
  {
    setSelectedState(e.target.value);
    let name, value;
    name = e.target.name;
    value = e.target.value;

    setregister({ ...register, [name]: value });
   
  }
 //console.log(selectedState);


  return (
    <div style={{ background:"#F8F8FF" }}>
      <div className="container">
        <Margin>
        <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scale:0}} transition={{duration:'0.5'}}>

          <div className="card shadow-lg p-5">
            <div className="card-title">
              <Title>Sign up</Title>
            </div>
            <div className="card-body row ">
              <div className="col-5" style={{ paddingLeft: "50px" }}>
                <form className="form" onSubmit={submitlogin}>
                  <TextField
                    fullWidth
                    autoComplete="off"
                    required
                    name="name"
                    value={register.name}
                    className="mb-4"
                    label="Name"
                    type="text"
                    variant="standard"
                    onChange={handle}
                    helperText={errors.name}
                    FormHelperTextProps={{ style: { color: "red" } }}
                  />
                  <TextField
                    fullWidth
                    autoComplete="off"
                    required
                    name="email"
                    value={register.email}
                    className="mb-4"
                    label="Email"
                    type="Email"
                    variant="standard"
                    onChange={handle}
                    helperText={errors.email}
                    FormHelperTextProps={{ style: { color: "red" } }}
                  />

                  <TextField
                    fullWidth
                    autoComplete="off"
                    required
                    name="contact"
                    value={register.contact}
                    className="mb-4"
                    label="Contact"
                    type="Contact"
                    variant="standard"
                    onChange={handle}
                    // helperText={errors.email}
                    FormHelperTextProps={{ style: { color: "red" } }}
                  />


                  <FormControl  style={{width:"50%"}} required>
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      
                      className="mb-4"
                      name="state"
                      variant="standard"
                      value={register.state}
                      label="State"
                      onChange={selectState}
                    >
                        {Object.keys(arr).map(function(key) {
                           return <MenuItem value={key}>{key}</MenuItem>
                        })}

                    </Select>
                  </FormControl>

                  <FormControl  style={{width:"50%"}} required>
                    <InputLabel>City</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      
                      className="mb-4"
                      name="city"
                      variant="standard"
                      value={register.city}
                      label="City"
                      onChange={handle}
                    >
                          {selectedState && 
    
                               arr[selectedState].map((city)=>{
                               return  <MenuItem value={city}>{city}</MenuItem>
                              
 
                          })}
                    </Select>
                  </FormControl>

                  <TextField
                    fullWidth
                    required
                    name="password"
                    value={register.password}
                    className="mb-4"
                    label="Password"
                    type={typee}
                    variant="standard"
                    onChange={handle}
                    helperText={errors.password}
                    FormHelperTextProps={{ style: { color: "red" } }}
                  />
                  {!icon && <VisibilityOffIcon onClick={handleToggle}  fontSize="small" style={{position:'absolute',color:'gray',float:'right',marginTop:'15px'}}/> }
                  {icon && <VisibilityIcon onClick={handleToggle} fontSize="small" style={{position:'absolute',color:'gray',float:'right',marginTop:'15px'}}/> }

                  <TextField
                    fullWidth
                    required
                    name="confirmpassword"
                    value={register.confirmpassword}
                    className="mb-4"
                    label="Confirm Password"
                    type="password"
                    variant="standard"
                    onChange={handle}
                    helperText={errors.confirmpassword}
                    FormHelperTextProps={{ style: { color: "red" } }}
                  />
                     <TextField
                    fullWidth
                    autoComplete="off"
                   
                    name="url"
                    value={register.url}
                    className="mb-4"
                    label="Image"
                    type="text"
                    variant="standard"
                    onChange={handle}
                  
        
                  />
                  <br />
                  <div className="text-center">
                    <Link
                      to="/login"
                      style={{
                        color: "purple",
                        marginRight: "auto",
                        textDecoration: "none",
                      }}
                    >
                      Already have an account? Log in!
                    </Link>
                  </div>
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <Button
                      type="submit"
                      value="submit"
                      variant="contained"
                      endIcon={<LockOpenIcon />}
                    >
                      Register
                    </Button>
                  </div>
                </form>
              </div>
              <div className="col-2"></div>
              <div className="col-5 text-center">
                <img src={img} height="330px" />
              </div>
            </div>
          </div>
          </motion.div>
        </Margin>
      </div>
    </div>
  );
}
