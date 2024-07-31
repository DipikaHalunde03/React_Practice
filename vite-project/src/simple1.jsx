import { useState } from "react";


function Chai()
{
  let [counter,setCounter]=useState(0)


  //let counter=0;
  const addvalue=()=>{

    
   // console.log("value added",counter);
    //counter=counter+1
    if(counter<20)
    {
      // not updating at each time , it will create batch of all and update only ones 
    
      
      setCounter(counter+1)
      
      setCounter(counter+1)
      
      setCounter(counter+1)  // rsult 1

      setCounter( prevcounter => prevcounter + 1)// not a bunch of operations 
      setCounter( prevcounter => prevcounter + 1)
      setCounter( prevcounter => prevcounter + 1)
      setCounter( prevcounter => prevcounter + 1) // used to maintain previous value so it will incment 

    }
   
    
  }
  const decreasevalue=()=>{
   
    //counter=counter-1
    if(counter>0)
    {
      setCounter(counter-1)

    }
   

    
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