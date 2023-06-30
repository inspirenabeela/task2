import React from "react";

function Offer2({inputValue,price,buttonClick}){
    if(buttonClick==true){
        var offf = ( price*20)/100;
       
    }
        
      
    return(<div>
        {
            buttonClick?
        <div className="div">

            <h3>you have got 20% offer</h3>
            <h2>your offer amount is </h2>
            <h1>{offf}</h1>
            </div>:
            <h2>enter a valued number</h2>
           
         } 
       { buttonClick = false}  
</div>
    )
}


export default Offer2;