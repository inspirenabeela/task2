
import './App.css';
import Home from "./new/Home";
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Offer1 from "./new/Offer1";
import Offer2 from "./new/Offer2";
import Offer3 from "./new/Offer3";

import { useState } from 'react';
function App() {
   let [inputValue,setInputValue]=useState('')
   let [price,setPrice]=useState("")
  let [buttonClick ,setButtonClick]=useState(false);
  
  return (<BrowserRouter>
  <div>
    <header className='coupon'>
  <nav >  
  <Link to='/'><button>Home</button></Link>  
       
        <div className="flex">
      <Link to="/Offer1">
        <button>coupon1</button>
      </Link>
      <Link to="/Offer2">
        <button>coupon2</button>
      </Link>
      <Link to="/Offer3">
        <button>coupon3</button>
      </Link>
      </div>
      
     </nav>
    
     </header>
     <Routes>
     <Route index element={<Home buttonClick={buttonClick} setButtonClick={setButtonClick} inputValue={inputValue} setInputValue ={setInputValue} price={price} setPrice={setPrice}/>}/>
     <Route path="Offer1" element={<Offer1 buttonClick={buttonClick} setButtonClick={setButtonClick} inputValue={inputValue} setInputValue ={setInputValue} price={price} setPrice={setPrice}/>}/>
     <Route path='Offer2' element={<Offer2 buttonClick={buttonClick} setButtonClick={setButtonClick}  inputValue={inputValue} setInputValue ={setInputValue} price={price} setPrice={setPrice} />}/>
     <Route path='Offer3' element={<Offer3 buttonClick={buttonClick} setButtonClick={setButtonClick} inputValue={inputValue} setInputValue ={setInputValue} price={price} setPrice={setPrice}/>}/>
     <Route path='*' element={<Home/>}/>
     </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
