import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
      <>
          <div className='signup-container'>
              <div className='signup-containe'>
                  <div className='signup-sec'>
                  <div className='mb-2'>
                    <h3>Sign Up</h3>
                  </div>
                  <div className='mb-5'>
                    <label>Enter your email and password to register</label>
                  </div>
                      <div class="mb-3">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder='Name' />
                      </div>
                      <div class="mb-3">
                          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder='Email' />
                      </div>
                      <div class="mb-3">
                          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder='Contact number' />
                      </div>
                      <div class="mb-3">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder='Password' />
                      </div>
                      <div className="form-check  mb-3">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                          <label class="form-check-label" for="flexCheckChecked">
                          I agree the Terms and Conditions
                          </label>
                      </div>
                      <div className="mt-1">
                          <button type="button" className="botn ">SIGN UP</button>
                      </div>
                      <div className="mt-4">
                          <p className='siguptext'>Already have an account?<Link to='/signup'><button type="button" className="btn-2 ">Sign in</button></Link> </p>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Signup;
