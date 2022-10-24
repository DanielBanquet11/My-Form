import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className="regis">
        <form className="f2">
        <h1>REGISTER</h1>
                <label >Name: </label>
                <input type="text" />
                <br />
                <label >Surname:</label>
                <input type="text" />
                <br />
                <label > Cell:   </label>
                <input type="number" />
                <br />
                <label >Birth date: </label>
                <input type="date" />
                <br />
                <label>  Email: </label>
                <input type="email" />
                 <br />
                <label> Pass: </label>
                <input type="password" />
                <br />
                <br />
             <button> Registrarse</button>   
             <br/>
             <Link  to='/'> Return</Link>
        </form>
    </div>
  )
}

export default Register
