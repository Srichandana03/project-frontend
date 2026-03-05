import axios from "axios";
import { useState } from "react";

function Reg() {

  const [data,setData] = useState({
    username:"",
    email:"",
    password:""
  });

  const changeName=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const submit=async()=>{
    try{
      const res=await axios.post(
        "https://project-backend-xom8.onrender.com/register",
        data
      )
      alert(res.data)
    }
    catch(xyz){
      alert(xyz.response?.data || "Error")
    }
  }

  return(
    <>
      <h1>Register</h1>

      <input onChange={changeName} name="username" placeholder="Username"/><br/><br/>

      <input onChange={changeName} name="email" placeholder="Email"/><br/><br/>

      <input onChange={changeName} name="password" placeholder="Password"/><br/><br/>

      <button onClick={submit}>Register</button>
    </>
  )
}

export default Reg;
