import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
function App() {
  const [authUser,setAuthuser]=useState(true)
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />

     
      </Routes> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Home/>
      <Toaster />

    </div>
  )
}

export default App