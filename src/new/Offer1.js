import React from "react";
import "./Offer.css";
function Offer1({inputValue,price,buttonClick}){
    
    if(buttonClick==true){
    var offf = ( price*10)/100;
   
}
    
  
    return(<div>
        {
            buttonClick?
        <div className="div">

            <h3>you have got 10% offer</h3>
            <h2>your offer amount is </h2>
            <h1>{offf}</h1>
            </div>:
            <h2>enter a valued number</h2>
           
         } 
       { buttonClick = false}  
</div>
    )
}


export default Offer1;