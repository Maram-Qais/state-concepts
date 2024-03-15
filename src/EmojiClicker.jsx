import { useState } from "react";
import{v4 as uuid} from "uuid";


function randomEm(){

    const choices =["🍔","🌻","🥕","😆","☃️"]
    return choices[Math.floor(Math.random()* choices.length)];
}


function EmojiClicker() {

const [emojis,SetEmojis] = useState([{ id: uuid(),emoji:randomEm()}])


const addemoji =()=>{

SetEmojis((oldemojis)=>[...oldemojis,{ id: uuid(),emoji: randomEm()}]);
};

const deleteEmoji =(id)=>{
    
console.log(id);
SetEmojis(prevEmojis =>{

   return prevEmojis.filter(e=>e.id !==id)

} )
};

const heart = ()=>{

    SetEmojis(prevEmojis=>{
     return   prevEmojis.map((e)=>{
            return{...e,emoji:"💗"}
        })
    })
}
  return (
<div>
{emojis.map((e)=>(
<span 
onClick={()=>deleteEmoji(e.id)} 
key={e.id}
style={{fontSize:"4rem"}}>
    {e.emoji}</span>
        ))}
<button onClick={addemoji}>Add Emoji</button>
<button onClick={heart}>make them all hearts</button>

    </div>
  )
}





export default EmojiClicker