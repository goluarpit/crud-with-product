import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
export default function ShowUser (){
    const nav=useNavigate()
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/users").then((req)=>{
            req.json().then((resp)=>{
                setData(resp)
            })
        })
    },[])

    function del(x){
        
       window.location.reload(true)
      if( window.confirm('are you sure you want to delete')){
        fetch(`http://localhost:5000/users/${x}`,{
            method:"DELETE"}
        ).then((req)=>{
        }).then((resp)=>{
              
            
            })
       }
    }
    function edit(golu){
         window.localStorage.setItem("st",JSON.stringify(golu))
         nav('/createuser')
    }
    return(
        <React.Fragment>
            <table border={1} className="table table-hover">
                <tr>
                    <th>id</th>
                    <th>Name</th>
                   
                    <th>Email</th>
                    <th>Number</th>
                    <th>Password</th>
                    <th>delete</th>
                    <th>edit</th>

                </tr>
                {
                    
                    data.map((item)=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.password}</td>
                        <td><button onClick={()=>{del(item.id)}}>delete</button> </td>
                        <td><button onClick={()=>{edit(item.id)}} >edit</button> </td>
                    </tr>
                    )
           }
            </table>
        </React.Fragment>
        
    );
}