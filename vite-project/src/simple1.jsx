import { useState } from "react";


function Chai()
{
  let [counter,setCounter]=useState(0)


  //let counter=0;
  const addvalue=()=>{

    
    console.log("value added",counter);
    //counter=counter+1
    setCounter(counter+1)
    
  }
  const decreasevalue=()=>{
   
    counter=counter-1
    setCounter(counter)

    
  }

    return (
      <>



      

        <button onClick={addvalue}>add value{counter}</button>
        <button onClick={decreasevalue}>decrease value </button>
      
        <h2>
        counter value :{counter}

        
        </h2>

         
      </>
       
      );
}
export default Chai