import React from 'react';
import Navbar from './navbar';




export default function newadoptor(){
    return(
        <>
        
            <Navbar  class1="colorChange" class2="colorChange" c1="black" c2="black"/>
            <div className='container pt-5' >
            <div className='top mt-5'>
                <h1 style={{fontFamily:'Arvo',color:'#e75480'}}><b>Checklist for New Adopters</b></h1>
                <div>
                    <div>
                        <p>
                        Congratulations on adopting a pet! You are embarking on a wonderful and rewarding relationship. Because adopting a new pet comes with a 
                        lot of change for both pet and pet parent, we've compiled a checklist to help make the transition as smooth as possible.
                        </p>
                        <p>
                        Congratulations on adopting a pet! You are embarking on a wonderful and rewarding relationship. Because adopting a new pet comes with a 
                        lot of change for both pet and pet parent, we've compiled a checklist to help make the transition as smooth as possible.
                        </p>
                        <p>
                        Congratulations on adopting a pet! You are embarking on a wonderful and rewarding relationship. Because adopting a new pet comes with a 
                        lot of change for both pet and pet parent, we've compiled a checklist to help make the transition as smooth as possible.
                        </p>
                    </div>
                    <div>
                        <h4>Questions for All Adopters:</h4>
                        <ol>
                            <li>Do you have any other pets and how will they react to a new pet?</li>
                            <li>Is your current residence suited to the pet you're considering?</li>
                            <li>How will your social life or work obligations affect your ability to care for a pet?</li>
                            <li>Do you have a plan for your new pet during vacations and/or work travel?</li>
                            <li>How do the people you live with feel about having a pet in the house?</li>
                            <li>Is there an adult in the family who has agreed to be ultimately responsible for the pet's care?</li>
                        </ol>
                        <h4>Necessary Items for Dogs:</h4>
                        <ul>
                            <li>Food and water bowls</li>
                            <li>Collar</li>
                            <li>Four to six-foot leash</li>
                            <li>ID tag with your phone number</li>
                            <li>Plastic poop baggies (biodegradable ones are best) or pooper scooper</li>
                            <li>First-aid supplies</li>
                        </ul>
                        <h4>Necessary Items for Cats:</h4>
                        <ul>
                            <li>Food and water bowls</li>
                            <li>Kitty litter</li>
                            <li>Nail clippers</li>
                            <li>First-aid supplies</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}