import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function CreateUser (){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[mobile,setMobile]=useState("")
    const[password,setPassword]=useState("")
    const nave=useNavigate()
    function register(){
          
        let data={name,email,mobile,password}
        fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{
                 "Content-Type":"application/json"
            },body:JSON.stringify(data)
        }).then((req)=>{
            req.json().then((resp)=>{
                console.log(resp)
            })
        })
        nave("/showuser")
    }
    function update(){
        let data={name,email,mobile,password}
        let id=JSON.parse(window.localStorage.getItem("st"))
        fetch("http://localhost:5000/users"+"/"+id,{
            method:"PUT",
            headers:{
                 "Content-Type":"application/json"
            },body:JSON.stringify(data)
        }).then((req)=>{
            req.json().then((resp)=>{
                console.log(resp)
            })
        })
        nave("/showuser")
    }
    return(
        <React.Fragment>
             <form >
                 Name:<br/>
            <div >
                <input type="text"  required placeholder="Enter Your Name...." value={name} name="name" onChange={(arpit)=>{setName(arpit.target.value)}}  />
                </div>
                email:<br/>
            <div >
                <input type="email"  required placeholder="Enter Your email id...." value={email} name="email" onChange={(arpit)=>{setEmail(arpit.target.value)}}  />
                </div>
                number:<br/>
            <div>
                <input type="number"  required placeholder="Enter Your mobile  number...." value={mobile} name="mobile" onChange={(arpit)=>{setMobile(arpit.target.value)}}/>
                </div>
                Password:<br/>
            <div >
                <input type="password" required placeholder="Enter Your   password....." value={password} name="password" onChange={(arpit)=>{setPassword(arpit.target.value)}} />
                </div>
                <input type="button" value="Register" class="btn btn-outline-primary mt-4" onClick={register}/>
                <input type="button" value="Update" class="btn btn-outline-primary mt-4" onClick={update}/>
                </form>
        </React.Fragment>
        
    );
}