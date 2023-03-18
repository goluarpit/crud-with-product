import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
export default function ShowProduct(){
    const nav=useNavigate()
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/products").then((req)=>{
            req.json().then((resp)=>{
                setData(resp)
            })
        })
    },[])

    function del(x){
        
       window.location.reload(true)
      if( window.confirm('are you sure you want to delete')){
        fetch(`http://localhost:5000/products/${x}`,{
            method:"DELETE"}
        ).then((req)=>{
        }).then((resp)=>{
              
            
            })
       }
    }
    function edit(golu){
         window.localStorage.setItem("st",JSON.stringify(golu))
         nav('/createproduct')
    }

    return(
        <React.Fragment>
            <table border={1} className="table table-hover">
                <tr>
                    <th>id</th>
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Discription</th>
                    <th>Size</th>
                    <th>image</th>
                    <th>delete</th>
                    <th>edit</th>

                </tr>
                {
                    
                    data.map((item)=>
                    <tr>
                        <td>{item.id}</td>
                         <td>{item.productname}</td>
                   <td>{item.price}</td>
                   <td>{item.quantity}</td>
                   <td>{item.discription}</td>
                   <td>{item.size}</td>
                   <td><img src={item.url} alt="......."/></td>
                        
                        <td><button onClick={()=>{del(item.id)}} >delete</button> </td>
                        <td><button onClick={()=>{edit(item.id)}} >edit</button> </td>
                    </tr>
                    )
                
                    
           }
            </table>
        </React.Fragment>
        
    );
}