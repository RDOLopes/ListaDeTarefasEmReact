import React, { useState } from 'react'
import './App.css'



const App = ()=> {

  // let message = "Olá mundo"

  const [message, setMessage] = useState("hello world!")

  return (
    <>
      <div className='container'>{message}</div>
      <button onClick={() => setMessage("hellooooooooooo!!!!!!!")}>Mudar mensagem</button>
    </>
  )
}


export default App;