import React, { useEffect, useState } from 'react';
import './Signup.css'
function Signup()
{
  // usestate 
   const [count,setcount]=useState(0);
   const [total,settotal]=useState(0);
   //const [status,setstatus]=useState("open");

   // useEffect 


//    useEffect(()=>{
    
//     first

//     return ()=>{
//         second
//     }



//    },[third])

function handlecount()
{
    setcount(count+1);
}
function handletotal()
{
    settotal(total+1);
}


// 1st type 
//   useEffect(()=>{
//     alert("i will run on each render ")
//   })

// 2nd type 

// useEffect(()=>{
    
//     alert("i will run on only first  render ")

// },[])

// 3rd type 


// useEffect(()=>{
    
//     alert("i will run on count updation before UI  ")

// },[count])

// multiple dependency 



useEffect(()=>{
    
    alert("i will run on every time when updation of total/count  ")

},[count,total])


    return(
<>



     {/* <button  onClick={()=>{ 
        setstatus("open");
        
    }}>open status</button>

</div>  */}


<div class="signup-container">
    <form action=""  class="signup-form">
    <h2>Sign Up</h2>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required />

        <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />

            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />

            <button type="submit" > <a href="index.html">Sign Up</a></button>

    </form>


    <div>

<button  onClick={handlecount}>ADD</button>
<h2> count is  {count}</h2>

<button  onClick={handletotal}>Total</button>

<h2> total is  {total}</h2>

</div>

</div>


</>
    );

}



export default Signup;