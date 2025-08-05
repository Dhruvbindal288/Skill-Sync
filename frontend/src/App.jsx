import React, { useEffect } from 'react'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import useAuthStore from './store/useAuthStore'; 
import Navbar from './components/Navbar'
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
      <Navbar/>
      <Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/signup' element={<SignUp/>}/>
<Route path='/login' element={ user?<Homepage/>:<Login/>}/>
</Routes>
      
     
      <ToastContainer />
    </div>
  )
}

export default App
