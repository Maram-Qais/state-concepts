
import {useState} from 'react'
function generateGameBoard(){
    console.log('   MAKING THE INTIAL GAME ')
    return Array(5000);
}


function Dumbo() {
const [board,Setboard]= useState(generateGameBoard());
  return (


<button onClick={()=> Setboard("hello?")}>

click me to change state
</button> 

)
}

export default Dumbo