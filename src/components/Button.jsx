function Button({onbuttonClick})
{

  let info=["c","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]


  return(<div className="container">
    {info.map(item=>  <button className="but" onClick={(item)=>{onbuttonClick(item.target.textContent)}}>{item}</button>)}
  
  
  </div>
   
  );
}
export default Button;