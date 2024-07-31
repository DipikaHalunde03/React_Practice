import { useState } from 'react'
import Card from './components/card';



function App() {
  const [count, setCount] = useState(0)
  let myobject={
    username: "Dipika",
    age: 21
  }

  return (
  
  <>
    
<h1 className='bg-green-300  max-w-sm mx-auto  text-black p-5 rounded-xl shadow-lg flex items-center space-x-4 mb-5' >
      Tailwind test
    </h1>
    
  <Card username="Deep" designation="Junior developer" location="Hydrabad"/>
    
  <Card username="Dipika" designation="AI Engineer "  location="Pune"/>

  
  <Card username="Halunde" designation="Software Developer "  location="Hydrabad"/>




  


</> 
  );
}

export default App
