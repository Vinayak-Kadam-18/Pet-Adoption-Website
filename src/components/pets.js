import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from 'styled-components';
import DetailCard from "./DetailCard";
import Navbar from './navbar';
import { motion } from "framer-motion"



export default function (props) {
  const Img = styled.img`
  max-height:90%;
  max-width:90%;
  display:block;
  border-radius:15px;
  margin-top:-10px
  `
  const Heading = styled.p`
  font-weight:bold;
  font-family:Arial;
  font-size:25px;
  color:#2f4f4f
  `

  const Columnitems = styled.p`
  line-height:2.5em;
  font-family:Arial;
  font-size:19px
  `
  useEffect(() => {
    getdata();
  }, []);

  // const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.get("idl")
  let { id } = useParams();
  const [items, setItems] = useState([]);

  const getdata = async () => {
    const response = await fetch(`http://localhost:5000/pets/${id}`);
    const data = await response.json();

    setItems(data);
    console.log(data);
  };

  return (
    <>
  <Navbar  class1="colorChange" class2="colorChange" c1="black" c2="black"/>
  <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>


    <div style={{background:"#F8F8FF"}}>
    <div style={{padding:"50px"}}>
      {items.map((item) => {
        return (
          <div>
          

            <DetailCard id={item._id} name={item.name} age={item.age} breed={item.breed} gender={item.gender} url={item.url} description={item.description} owner={item.owner} city={item.city} contact={props.contact} reason={item.reason} characterstics={[item.characteristics]} vaccinated={item.vaccinated}  />
          </div>
        );
      })}
    </div></div>
    </motion.div>
    </>
  );
}
