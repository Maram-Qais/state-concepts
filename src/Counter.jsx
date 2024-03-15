import {useState} from 'react'


;
function Counter() {

const [count,Setcount] = useState(0)


const addone =()=>{

    Setcount( count +1)
}

const addthree =()=>{
Setcount((currentCount) => currentCount +1); // make update to state that depend on previous value.
Setcount((currentCount) => currentCount +1); // make update to state that depend on previous value.
Setcount((currentCount) => currentCount +1); // make update to state that depend on previous value.


}
  return (


    <div>
        <p>
            count {count}
        </p>


        <button onClick={addone}>+</button>
        <button onClick={addthree}>+3</button>

    </div>
  )
}

export default Counter