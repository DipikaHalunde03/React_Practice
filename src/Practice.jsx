
import not from "./not.jpg"
import './Practice.css'
const items=[
    "camera",
    "smartphone",
    "selfistick"
]

const fruits=["mango","kiwi","orange"];
console.log(fruits[0]);
const [first,second,third]=["mango","kiwi","orange"];
console.log(first);
console.log(second)
console.log(third)



const dishobjects=items.map((dish,i)=>
({
    id:i,
    title:dish

}));

function Practice({name,year}) {

    return (
      <>
     
      <div id="div-1">
      <h1>{name}</h1>
      <h1>{year}</h1>  
      <Main dishes={items}/>
     

      <img src={not} height={200} width={200}  id ="img-1"/>
      </div>

      </>
      
    )
  }
  
  function Main({dishes})
  {
    return(
        <ul>
        {dishes.map((dish)=>(
            <li>{dish}</li>
           
        
        )

        )}
    </ul>

    ) ;
    

  }
  export default Practice