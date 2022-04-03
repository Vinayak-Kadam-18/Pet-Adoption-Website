import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Adopt from'./components/adopt';
import Loginadopter from'./components/loginA';
import Loginuser from'./components/LoginU';
import Register from'./components/register';
import Pets from'./components/pets';
import Mypets from'./components/mypets';
import Home from'./components/Home';
import User from'./components/user';
import ProfileDecision from './components/ProfileDecision';
import {  AnimatePresence } from "framer-motion"
import Faq from './components/faq';
import Error from'./components/Error';
import Checklist from './components/checklist';
import Covid from './components/covidinfo'


import './App.css';
    

function App() {

  
  
    return (
    <>
    <AnimatePresence exitBeforeEnter>
    <BrowserRouter>
    {/* color="linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)    */}
    <Routes>
    
      <Route path='/' exact element={<><Home /></>}/>
      <Route path='/adopt' exact element={<><Adopt/></>} />
      <Route path='/adopt/pets/:id'exact element={<Pets contact="TRUE"/> }/>
      <Route path='/login' exact element={<Loginadopter/>} />      
      <Route path='/adopter/login' exact element={<Loginadopter/>} />
      <Route path='/user/login' exact element={<Loginuser/>} />
      <Route path='/register/:type' element={<Register/>} />
      <Route path='/user' exact element={<User/>} />
      <Route path='/profile/mypets/:id'  element={<Mypets /> }/>
      <Route path='/profile' element={<ProfileDecision/>} /> 
      <Route path='/FAQs' exact element={<Faq/>} /> 
      <Route path="/newadopter" element={<Checklist/>} /> 
      <Route path="/covid-info" element={<Covid/>} /> 


      <Route path="*" element={<Error/>} /> 

      {/* { sessionStorage.getItem('UserId') && <Route path='/profile' element={<ProfileAdopter/>} />}

      { sessionStorage.getItem('Userprofile') && <Route path='/profile' element={<ProfileUser/>} />}
 */}


 
    </Routes>
    </BrowserRouter>
    </AnimatePresence>
    {/* <Navbar />
        <Header />
        <Body /> */}
    </>
  );
}

export default App;
