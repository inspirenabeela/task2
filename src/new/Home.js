
import "./home.css";
import React from "react";
function Home({inputValue,setInputValue,price,setPrice,buttonClick,setButtonClick}){
 
 
  function amount(){ 
     if(inputValue.length===0){
    return false;
    }else{
      
     setPrice(parseInt(inputValue));
     setButtonClick(true)
    }
    setInputValue("")
  }

    return(<div>



    <div className="home">
    <input type="number" value={inputValue}  name="offer" onChange={(event)=>setInputValue(event.target.value)}  placeholder="enter the price of your product" />
     <button onClick={amount} >Generate Offers</button>
     </div>
     </div>
     );
}
export default Home;