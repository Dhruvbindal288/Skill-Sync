import React from 'react'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className='h-screen'>
      <SignUp/>
      <Login/>
      <ToastContainer />
    </div>
  )
}

export default App
