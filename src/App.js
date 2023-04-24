import { Card } from "./card.js";
import React, { useState, useEffect } from "react";
import { Header } from "./header";
import { randomCharacters } from "./helper";

function App() {
  

  const [count, setCount] = useState(0);

  const [bestScore, setBestScore] = useState(0);

  const [selected,setSelected]=useState([])


  //game Mechanics

  const handleClick=(object)=> {
    if (selected.includes(object)) {
      resetGame()
      return;
    } 
    setSelected(selected.concat(object))
    setCount(count + 1)
    if(count>bestScore){setBestScore(count+1)}
  }

  //Reset Game
  function resetCount() {
    setCount(0);
  }
  function resetSelected() {
    setSelected([])
      }
  function updateBestScore() {
    if (count > bestScore) {
      setBestScore(count);
      return;
    }
  }
  function resetGame() {
    updateBestScore();
    resetSelected();
    resetCount();
  }


  //Doing the logic of this game:
  //1 functions to augment count and the best score.
  //3 function to randomize all the cards once they one of them is clicked
  //4 function to loose if a selected:true card is clicked.
  // making all the images the same size.

  return (
    <div className="container-xxl" style={{backgroundImage:`url('https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA11796.width-1440.jpg')`}}>
      
      <div className="container">
        <Header score={count} bestScore={bestScore}/>
      </div>
      <div className="container  d-flex p-2 flex-wrap">{randomCharacters().map((char) => {
    return <Card data={char} key={char.id} handleClick={handleClick}/>;
  })}</div>
    </div>
  );
}

export default App;
