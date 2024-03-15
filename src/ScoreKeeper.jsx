import { useState } from "react"




function ScoreKeeper() {

const [scores,Setscores] = useState({p1score:0 ,p2score:0 , p3score:0})



const addP1score =()=>{

Setscores( oldScores=>{

 return   {...oldScores, p1score: oldScores.p1score +1}
});
}

const addP2Score =() =>{
Setscores(oldScores =>{

    return {...oldScores, p2score: oldScores.p2score +1}
})

}


const addP3Score =() =>{

    Setscores(oldScores=>{

        return {...oldScores, p3score: oldScores.p3score +1}
    })
}

  return (
    <div>

        <p> Player 1 : {scores.p1score}</p>
        <p> Player 2 :{scores.p2score}</p>
        <p> Player 3 :{scores.p3score}</p>

        <button onClick={addP1score}>+1 Player 1</button>
        <button onClick={addP2Score}>+1 Player 2</button>
        <button onClick={addP3Score}>+1 Player 3</button>



    </div>
  )
}

export default ScoreKeeper

