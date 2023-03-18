import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProduct(){
 


    const[productname,setProduct]=useState("")
    const[price,setPrice]=useState("")
    const[quantity,setQuantity]=useState("")
    const[discription,setDiscription]=useState("")
    const[size,setSize]=useState("")
    const[url,setUrl]=useState("")
    const nave=useNavigate()
    function register(){
          
        let data={productname,price,quantity,discription,size,url}
        fetch("http://localhost:5000/products",{
            method:"POST",
            headers:{
                 "Content-Type":"application/json"
            },body:JSON.stringify(data)
        }).then((req)=>{
            req.json().then((resp)=>{
                console.log(resp)
            })
        })
        nave("/showproduct")
    }
    function update(){
        let data={productname,price,quantity,discription,size,url}
        let id=JSON.parse(window.localStorage.getItem("st"))
        fetch("http://localhost:5000/products"+"/"+id,{
            method:"PUT",
            headers:{
                 "Content-Type":"application/json"
            },body:JSON.stringify(data)
        }).then((req)=>{
            req.json().then((resp)=>{
                console.log(resp)
            })
        })
        nave("/showproduct")
    }
    return(
        <React.Fragment>
             <form >
                 Product Name:<br/>
            <div >
                <input type="text"  required placeholder="Enter Your product Name...." value={productname} name="productname" onChange={(arpit)=>{setProduct(arpit.target.value)}}  />
                </div>
               Price :<br/>
            <div >
                <input type="number"  required placeholder="Enter Your product price...." value={price} name="price" onChange={(arpit)=>{setPrice(arpit.target.value )}}  />
                </div>
                Quantity:<br/>
            <div>
                <input type="number"  required placeholder="Enter the quantity of product...." value={quantity} name="quantity" onChange={(arpit)=>{setQuantity(arpit.target.value )}} />
                </div>
                Discription:<br/>
            <div >
                <input type="text" required placeholder="more details about product....." value={discription} name="discription" onChange={(arpit)=>{setDiscription(arpit.target.value )}}  />
                </div>
                Size:<br/>
            <div>
                <input type="number"  required placeholder="Enter the size of product...." value={size} name="size" onChange={(arpit)=>{setSize(arpit.target.value )}} />
                </div>
                Url:<br/>
            <div>
                <input type="text"  required placeholder="Enter the url of product...." value={url} name="url" onChange={(arpit)=>{setUrl(arpit.target.value )}} />
                </div>

                <input type="button" value="Submit" class="btn btn-outline-primary mt-4" onClick={register} />
                <input type="button" value="Update" class="btn btn-outline-primary mt-4" onClick={update} />
                </form>
        </React.Fragment>
        
    );
}