function Display({disvalue})
{

return  <input type="number" className="num" placeholder='Enter Number'
   value={disvalue}   onChange={(e)=>console.log(e.target.value) } />
}

export default Display; 
