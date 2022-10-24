import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
        <form className=" f1" >
            <h1>LOGIN</h1>
            <label >User: </label>
              <input type="text" />
              <br />
              <br />
              <label >Pass: </label>
              <input type="password" />

           <br />
        <button> INICIAR</button>
        <br />
        <br />
           <Link  to='/regis'> Check in</Link>
           <Link  to='/pass'>Did you forget your password?</Link> 
           <br />
        </form>
    

    </div>
  )
}

export default Login
