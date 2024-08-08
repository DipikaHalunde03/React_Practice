import { useState } from 'react'
import { useCallback ,useEffect ,useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [ numberallow , setnumallow]=useState(false);

  const[ charallow , setcharallow]=useState(false);

  const[password , setpassword]=useState("")
  
  const passwordref=useRef(null) 


  

  const passwordgenerator =useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtuvwxyz"

    if(numberallow)
    {
      str=str+"0123456789"

    }
    if(charallow)
    {
      str=str+"!@#$%^&*()"
    }

    for(let i=1;i<=length;i++)
    {
      let char =Math.floor( Math.random() * str.length+1)
      pass=pass+str.charAt(char)
    }
    setpassword(pass)

  }
     , [ length , numberallow,charallow,setpassword]);

    const  copypasswordtoclip =useCallback(()=>{
      passwordref.current?.select();//for copy to clipboard
      passwordref.current?.setSelectionRange(0,5)// range of password selection
window.navigator.clipboard.writeText(password)
    },[password])










useEffect(()=> {

  passwordgenerator()
},[length , numberallow,charallow , passwordgenerator])

  return (
    <>
   
   <div className="w-full max-w-md mx-auto shadow-md 
   rounded-lg px-4 my-20  bg-gray-700 text-orange-500">
   <h1 className="text-2xl text-center "> Password Generator</h1>
  
  <div className="flex  shadow  overflow-hidden mx-4 my-5 py-3 ">
    <input
    type="text"
    value={password}
    className="outline-none w-full py-1 px-3"
    placeholder="Password"
    readOnly
    ref={passwordref}
    />
<button className="ouline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
 onClick={copypasswordtoclip} >copy</button>
 

  </div>
  <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1 py-2">
      <input type="range" min={6} max={100} value={length} 
      className='cursor-parser'  onChange={(e)=>{
        setlength(e.target.value)
      }}/>
      <label > Length : {length}</label>

    </div>
    <div className=" flex items-center gap-x-1">
      <input type="checkbox"
      defaultChecked={numberallow} 
      id="numberinput"
      onChange={()=>{
        setnumallow((prev)=>!prev)
      }}/>
      <label htmlFor="numberinput">Numbers</label>  
    </div>

    <div className=" flex items-center gap-x-1">
      <input type="checkbox"
      defaultChecked={numberallow} 
      id="spechar"
      onChange={()=>{
        setcharallow((prev)=>!prev)
      }}/>
      <label htmlFor="spechar">Chracters</label>  
    </div>
  </div>
   </div>
 
    
    </>
  )
}

export default App
