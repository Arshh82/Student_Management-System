import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'


// let bgimage = new URL ("/public/images/login/pexels-karl-solano-2883049.jpg",import.meta.url)

const Login = () => {
  let navigate = useNavigate();
  let [data, updatedata] = useState({ uname: "", upwd: "" });
  function change(e) {
    updatedata({ ...data, [e.target.name]: e.target.value });
  }
  let [loading, updateLoading] = useState([]);
    useEffect(() => {
        show();
    })
    async function show() {
        var load = await axios.get("https://student-api-34v1.onrender.com/users/");
        updateLoading(load.data);
        console.log(loading);
    }
  return (
    <>
      <div className='login-container'>
        <div className='login-containe'>
          <div className='login-heading'>
            <p className='heading-label'>Sign in</p>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            async function signup() {
              let d = await axios.get(
                "https://student-api-34v1.onrender.com/users/"
              );
              console.log(d);
              // alert('hii')
              d = await d.data;
              let c = 0;
              for (var i of d) {
                if (data.uname === i.uname && data.upwd === i.upwd) {
                  c++;
                  break;
                }
              }
              if (c === 0) {
                alert("Invalid user id and password");
              } else {
                alert("Log In Successfull");
                navigate("/dashboard");
              }
            }
            signup();
          }}
          >
            <div className='login-sec'>
              <div class="mb-2">
                <label for="exampleFormControlInput1" class="form-label">User name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" value={data.uname}
                  name="uname" onChange={change} />
              </div>
              <div className="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleFormControlInput1" value={data.upwd}
                  name="upwd" onChange={change} />
              </div>
              <div className="mt-3">
                <button type="submit" className="botn ">SIGN IN</button>
              </div>
              <div className="mt-5">
                <p className='siguptext'>Dont Have account ? <Link to='/signup'><button type="button" className="btn-2 ">Sign up</button></Link> </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login