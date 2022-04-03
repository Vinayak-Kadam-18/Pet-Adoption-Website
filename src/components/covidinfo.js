import React, {useEffect} from 'react';
import Navbar from './navbar';


export default function Covidinfo(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(

        <div className='main' style={{backgroundColor:'#F8F8FF'}}>
                  <Navbar  class1="colorChange" class2="colorChange" c1="black" c2="black"/>
         
            <div className='container' style={{paddingTop:'100px',fontSize:'1rem',lineHeight:'1.7em',fontFamily:'Arvo',wordSpacing:'2px'}}>
            <div className='card shadow p-5'style={{borderRadius:'20px'}}>
                <h1 className='text-center' style={{fontFamily:'Arvo',color:'#e75480'}}><b>Covid-19 Resources</b></h1><br/><br/>
                <div>
                    <div>
                        <a href='https://www.petfinder.com/helping-pets/covid-19-resources/pet-stress-training-behavior-tips/'>
                            <h2>How to help Dogs & Cats During the Coronavirus (COVID-19) Pandemic</h2>
                        </a>
                        <p>
                            While Coronavirus/COVID-19 has many of us practicing social distancing or settling in to shelter in place,
                            there are still thousands of dogs and cats that need our help. Luckily, there are still plenty of ways you can 
                            support the them—and the groups that care for them.
                        </p>
                        <h3 style={{fontFamily:'Arvo',color:'#e75480'}}>1. Give to Animal Shelters in Need</h3>
                        <p>
                            One of the fastest and simplest ways to help a dog or cat amidst Coronavirus is by giving a donation. 
                            Fundraisers and events for many pet shelters have been cancelled. Traffic from potential adopters has slowed, 
                            but there are still pets coming in, costs for care, and needs to be met.
                        </p>
                        <h3 style={{fontFamily:'Arvo',color:'#e75480'}}>2. Adopt a Pet</h3>
                        <p>
                            It's s as true today as it always has been. Adopting a new dog or cat is one of the best ways to help homeless pets. 
                            Search for an available dog, cat, rabbit, and more near you. If you find a pet that looks just perfect for you, fill 
                            out a pet adoption application, then reach out to the shelter directly to see what their current protocols are, given 
                            COVID-19.
                            Since we’ll all be spending more time at home, it’s a good time to start healthy training habits, form a bond, 
                            and get a new pet acclimated to your home.
                        </p>
                    </div><br/>

                    <div>
                        <h2 style={{fontFamily:'Arvo',color:'#e75480'}}><b>COVID-19 Pet Stress, Training & Behavior Tips & Advice for Pet Owners and Foster Families</b></h2>
                        <p>
                            With the coronavirus and COVID-19 pandemic, our new normal seems to change every day. Those changes affect our pets, 
                            too. Here are some simple tips to help your furry friend adapt to an ever-changing landscape—whether you’re a pet 
                            parent, new adopter or fostering a dog or cat.
                        </p>
                        <h3 style={{fontFamily:'Arvo',color:'#e75480'}}><b>Tips for Managing Your Pet’s Stress</b></h3>
                        <p>
                            Look for signs of stress in your pet, like hiding, withdrawal, aggression or inappropriate elimination or spraying. 
                            Dogs and cats are sensitive to their environment. Luckily, time, consistency and a calm demeanor can go a long way in 
                            helping your pet relax.
                        </p>
                        <p>
                            Keep in mind the rule of 3’s as a guideline for how long it may take a pet to adjust, especially for fosters and 
                            new adoptions:
                        </p>
                        <p><b>3 Days to Decompress</b></p>
                        <p>Pet may seem scared or overwhelmed May not want to eat or drink Pet may hide and test boundaries</p>
                        <p><b>3 Weeks to Learn Routine</b></p>
                        <p>Pet may feel more comfortable as he/she figures out the environment and feels more at home May start to 
                            understand a routine and begins to let guard down Behavior issues can still start to appear</p>
                        <p><b>3 Months to Settle In</b></p>
                        <p>Pet begins to bond and feel comfortable May start to settle into a routine Pet gains a sense of security and feelings of “home”</p>
                        <h2 style={{fontFamily:'Arvo',color:'#e75480'}}>When You Go Back to Work</h2>
                        <p>Give your pet time to adapt and adjust. Just like their human counterparts, our pets are dealing with a lot of 
                            change. They may revert to some unexpected behaviors, need some help re-training, or just a little extra time to 
                            cuddle. Be patient, and keep an eye out for signs of separation anxiety so you can comfort them as-needed.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}