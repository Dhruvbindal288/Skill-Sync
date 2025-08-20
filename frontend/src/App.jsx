import React, { useEffect } from 'react'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Brosweskill from './pages/BrowseSkill';
import Notification from './pages/Notification';
import useAuthStore from './store/useAuthStore'; 
import Navbar from './components/Navbar';
import Aboutus from './pages/Aboutus';
import Footer from './components/Footer';
import Chat from './pages/Chat';
import ProfilePage from './pages/ProfilePage';
import Completeprofile from './pages/Completeprofile';
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
    <div>
      <Navbar></Navbar>
     <Routes>
  <Route path="/" element={<Homepage />} />
  <Route path="/aboutus" element={<Aboutus />} />
  <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp />} />
  <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
  <Route path="/browseSkill" element={user ? <Brosweskill /> : <Navigate to="/login" />} />
  <Route path="/requests" element={user ? <Notification /> : <Navigate to="/login" />} />
  <Route path="/chats" element={user ? <Chat /> : <Navigate to="/login" />} />
  <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/login" />} />
  <Route path="/complete-profile" element={user ? <Completeprofile/> : <Navigate to="/login" />} />
</Routes>
      <Footer>
        
      </Footer>
     
      <ToastContainer />
    </div>
  )
}

export default App
