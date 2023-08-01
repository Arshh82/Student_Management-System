import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


// let bgimage = new URL ("/public/images/login/pexels-karl-solano-2883049.jpg",import.meta.url)

const Login = () => {
  return (
    <>
      <div className='login-container'>
        <div className='login-containe'>
          <div className='login-heading'>
            <p className='heading-label'>Sig in</p>
          </div>
          <div className='login-sec'>
            <div class="mb-2">
              <label for="exampleFormControlInput1" class="form-label">User name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-4">
              <label for="exampleFormControlInput1" class="form-label">Password</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mt-3">
              <button type="button" className="botn ">SIGN IN</button>
            </div>
            <div className="mt-5">
              <p className='siguptext'>Dont Have account ? <Link to='/signup'><button type="button" className="btn-2 ">Sign up</button></Link> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login