import React, {useEffect, useState} from 'react'
import Items from './Items';


function ProfileList() {

  const [items, setItems] = useState({});
  // const [isLoaded, setIsLoaded] = useState(false);

  const [index, setIndex] = useState(0);
  console.log("in BotCollct..:", index)

  let containPrev = index > 0;
  let containNext = index < items.length - 1;

  function handlePrevClick() {
    if (containPrev) {
        setIndex(index -1);
    }
  }


  function handleNextClick(){

    if (containNext) {
        setIndex(index + 1);
    }
    if(index === items.length -1){
        setIndex(0);
    }
  }

    // let avatar = items[index];



 console.log("from List")

  useEffect(() =>{
    fetch("http://localhost:3000/bots")
    .then((r) => r.json())
    .then((bots) => {
      console.log(bots);
      this.setItems(bots);
    });
  },[]);




  

  return (
    <div>
      <h2>Bot ProfileList</h2>
      <h3>({index + 1} of {items.length})</h3>
      <div>
        {items.map((item) =>(
        <Items  key = {item.id}
        item={item}

        />
        ))}
        <button onClick={handlePrevClick} disabled={!containPrev}>
          Prev
        </button>
        <button onClick={handleNextClick}>Next</button>
      </div>







    </div>
  )
}

export default ProfileList