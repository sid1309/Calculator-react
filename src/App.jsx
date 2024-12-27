import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Display from './components/Display';

function App() {
 
 

  const [calval,disval]=useState("");
  const  onbuttonclick=(e)=>
  {


    if(e==="c")
    {
      disval("");

    }
    else if(e==="=")
    {
      let res=eval(calval);
      disval(res);

    }
    else{
      console.log(e);

      let newval=calval+e;
      disval(newval);

      console.log(newval);
    }




  }


   


  return (
    <>
    <div className="edge">
      <Display disvalue={calval}></Display>
      <Button  onbuttonClick={onbuttonclick}></Button>
    </div>
      
    </>
  )
}

export default App;
