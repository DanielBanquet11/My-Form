import React from 'react'
import { Link } from 'react-router-dom'
const Pass = () => {
  return (
    <div className="pass"> 
        <form className="f3">
        <h1>RECOVER PASSWORD</h1>
        <label >Email: </label>
        <input type="email" />
         <br />
         <br />
         <button> ENVIAR</button>
         <br/>
         <Link  to='/'> Return</Link>
        </form>
        

    </div>
  )
}

export default Pass
