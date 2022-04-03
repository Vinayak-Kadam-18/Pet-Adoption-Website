import React,{useState} from 'react'
import './card.css';

import styled from 'styled-components'

export default function Card(props) {
    const Name = styled.p`
    font-family:'Arvo',serif;
    font-size:25px;
    letter-spacing:3px  ;
    color:#e75480
    
    `;
    const Age = styled.p`
    font-family:'Arvo';
    font-size:16px    ;
    letter-spacing:3px;
    margin-top:-20px;

    `;
    const Description = styled.p`
    font-family:'Arvo';
    font-size:1.12em;
    letter-spacing:1px;
    `;

    const [fav, setFav] = useState(false);
    return (
        <div className='c1' >
            <div className='card shadow-sm dog' style={{maxWidth:"250px", backgroundColor:"#FDFAF6", margin:"10px",borderRadius:'10px'}}>
                <img className='cad-img-top' src={props.img} height="180px"/>
                <div className='card-body'>
                    <div className='card-title'>

                    {/* <FavoriteOutlinedIcon sx={{ color: "red" }} className="mt-2" style={{float:"right"}}/> */}

                    <Name ><b>{props.name}</b></Name>
                    <Age>Age: {props.age} yrs</Age>
                    <Description>{props.gender}, {props.breed}</Description>

                    </div>
                    <div className='card-text'>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}
