import React from 'react'
import ProfileUser from'../components/profileU';
import ProfileAdopter from'../components/profileA';

export default function ProfileDecision
() {
  return ( sessionStorage.getItem('UserId')  ? <ProfileAdopter /> : <ProfileUser /> )
}
