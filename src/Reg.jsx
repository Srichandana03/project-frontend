import axios from "axios"; 
import { useState } from "react";
function Reg()
{
    const [data,setData]=useState(
        {
            username:"",
            email:"",
            password:""     
        }
    )
    const changeName=(e)=>
    {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submit=async()=>
    {
        try
        {
            //const res=await axiox.post("http://localhost:5000/reg",data)
            const res=await axios.post(
                "http://localhost:5000/reg",
                data
            )
            alert(res.data)
        }
        catch(xyz)
        {
            //alert(xyz.response.data)
            alert(xyz.response?.data||"Error")
        }
    }
    return(
        <>
            <h1>Iam App...</h1>
            <input onChange={changeName} name="username" placeholder="Username"/><br/>
            <input onChange={changeName} name="email" placeholder="Email"/><br/>
            <input onChange={changeName} name="password" placeholder="Password"/><br/>
            <button onClick={submit}>register</button>
        </>
    )
}
export default Reg;
