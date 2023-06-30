import React from "react";

function Offer3({inputValue,price,buttonClick}){
    if(buttonClick==true){
        var offf = ( price*25)/100;
       console.log(buttonClick)
    }
       
      
    return(<div>
        {
            buttonClick?
        <div className="div">

            <h3>you have got 25% offer</h3>
            <h2>your offer amount is </h2>
            <h1>{offf}</h1>
            </div>:
            <h2>enter a valued price</h2>
           
         } 
       { buttonClick = false}  
</div>
    )
}


export default Offer3;