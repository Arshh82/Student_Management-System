import React from 'react';
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Signup = () => {
    let navigate = useNavigate()
    // let [data, updatedata] = useState([]);
    let [user, updateUser] = useState({ name: '', email: '', contact: '', pwd: '' });
    // useEffect(() => {
    //     show();
    // });
    // async function show() {
    //     var res = await axios.get("https://student-api-34v1.onrender.com/users/");
    //     // console.log(res)
    //     updatedata(res.data);
    // }
    function change(e) {
        updateUser({ ...user, [e.target.name]: e.target.value });
    }


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
                      <form onSubmit={(e) => {
            e.preventDefault();
            async function addData() {
              var res = await axios.post(
                "https://student-api-34v1.onrender.com/users/",
                user
              );
              alert("USer Sign Up Completed");
              navigate('/');
              
            }
            addData();
          }}
        >
                      <div class="mb-3">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder='Name' name="name"
                    value={user.name}
                    onChange={change} />
                      </div>
                      <div class="mb-3">
                          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder='Email' name="email"
                    value={user.email}
                    onChange={change} />
                      </div>
                      <div class="mb-3">
                          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder='Contact number' name="contact"
                    value={user.contact}
                    onChange={change} />
                      </div>
                      <div class="mb-3">
                          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder='Password' name="pwd"
                    value={user.pwd}
                    onChange={change} />
                      </div>
                      <div className="form-check  mb-3">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                          <label class="form-check-label" for="flexCheckChecked">
                              I agree the Terms and Conditions
                          </label>
                      </div>
                      <div className="mt-1">
                          <button type="submit" className="botn ">SIGN UP</button>
                      </div>
                      </form>
                      <div className="mt-4">
                          <p className='siguptext'>Already have an account?<Link to='/'><button type="button" className="btn-2 ">Sign in</button></Link> </p>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Signup;
