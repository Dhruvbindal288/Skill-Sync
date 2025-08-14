import React, { useEffect } from 'react'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Brosweskill from './pages/BrowseSkill';
import Notification from './pages/Notification';
import useAuthStore from './store/useAuthStore'; 
import Navbar from './components/Navbar';
import Aboutus from './pages/Aboutus';
import Footer from './components/Footer';
function App() {
 const {checkAuth,loading,user}=useAuthStore();
 useEffect(()=>{
  checkAuth()
 },[checkAuth]);
 if(loading){
  return <div>
    <h1>Checking Authentication...Please wait for a second</h1>
  </div>
 }
  return (
    <div className='h-screen'>
      <Navbar></Navbar>
      <Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/aboutus' element={<Aboutus/>}/>
<Route path='/signup' element={user?<Homepage/>:<SignUp/>}/>
<Route path='/login' element={ user?<Homepage/>:<Login/>}/>
<Route path='/browseSkill' element={ <Brosweskill/>}/>
<Route path='/requests' element={<Notification/>}/>
</Routes>
      <Footer>
        
      </Footer>
     
      <ToastContainer />
    </div>
  )
}

export default App
