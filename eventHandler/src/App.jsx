import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("vasu")
  const[form,setform] = useState({name:"" , phone:""})

  
  const handle = () => {
    alert("Btn was clicked")
  }
  const handleOver = ()=>{
    alert("box was hovered")
  }
  // const handleChange = (e)=>{
  //   setname(e.target.value)
  // }
  const handleChange = (e)=>{
    setform({...form, [e.target.name]:e.target.value})  //setform is asynchroneus so log is run first 
    console.log(form)
  }
  return (
    <>
     <div className="button">
      <button onClick={handle}>Click me</button>
     </div>
     {/* <div className="red" onMouseOver={handleOver}>
      I am a red div
     </div> */}

     <input type="text" name="name" value={form.name} onChange={handleChange}></input>
     <input type="text" name="phone" value={form.phone} onChange={handleChange}></input>
    </>
  )
}

export default App
