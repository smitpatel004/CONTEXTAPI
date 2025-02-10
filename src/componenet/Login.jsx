import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";
function Login(){
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const {setUser}=useContext(UserContext)
    const handelsubmit=(e)=>{
e.preventDefault()
setUser({username,setUserName})
    }
    return(
        <div>
            <h2>LOGIN</h2>
            <input type="text"
            value={username}
            onChange={
                (e)=>{
                    setUserName(e.target.value)
                }
            }

            />
            <input type="text" 
            value={password}
            onChange={
                (e)=>{
                    setPassword(e.target.value)
                }
            }
            />
            <button onClick={handelsubmit} > Submit</button>
        </div>
    )
}
export default Login