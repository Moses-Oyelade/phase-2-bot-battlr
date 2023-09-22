import React from 'react';

function BotCollection() {
    
  const [index, setIndex] = unsState(0);
  console.log("in BotCollct..:", index)

  let containPrev = index > 0;
  let containNext = index < bots.length - 1;

  function handlePrevClick() {
    if (containPrev) {
        setIndex(index -1);
    }
  }


  function handleNextClick(){
    if (containNext) {
        setIndex(index = 1);
    }
    if(index === bots.length -1){
        setIndex(0);
    }
  }

    let avatar = bots[index];


  return (
    <div>BotCollection</div>
  )
}

export default BotCollection