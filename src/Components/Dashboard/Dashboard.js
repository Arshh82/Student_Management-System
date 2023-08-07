import React from 'react';
import './Dashboard.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

import { FaUserAlt } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TiDownload } from "react-icons/ti";
import { BiUpArrowAlt } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { TbMenuOrder } from "react-icons/tb";
import { BsFillKeyFill,BsCartFill } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";









const Dashboard = () => {
    let [coursedata, updateCoursedata] = useState([]);
    let [studentdata, updateStudentdata] = useState([]);
    useEffect(() => {
        show();
    })
    async function show() {
        var res = await axios.get("https://student-api-34v1.onrender.com/course");
        var studentres = await axios.get("https://student-api-34v1.onrender.com/students");
        updateCoursedata(res.data);
        updateStudentdata(studentres.data);
        // console.log(studentdata)
    }

  return (
      <>
          <div className='dashboard-container'>
              <div className='dashboard-menubar'>
                  <div className='menu-container'>
                      <p>Amber Courses</p><br />
                      <hr className='hr'></hr>
                      <div>
                          <ul className='menu-buttons'>
                              <a href='#dashboard'><li>
                                  <button>Dashboard</button>
                              </li></a>
                              <a href='#student'><li>
                                  <button>Students</button>
                              </li>
                              </a>
                              <a href='#courses'><li>
                                  <button>Courses</button>
                              </li>
                              </a>
                              <a href='#teachers'><li>
                                  <button>Teachers</button>
                              </li>
                              </a>
                          </ul>
                      </div>
                  </div>
              </div>
{/* -------------------------------------------------------------------------------------- */}
              <div className='dashboard-content'>
              <div className='dashboard-sec mb-5' id='dashboard'>
              <div ><p>Dashboard</p></div>
                      <div className='dashboard-count'>
                          <div className='count-box'>
                              <div className='count-logo' >
                                  <FaUserAlt />
                              </div>
                              <div className='count-discription'>
                                  <span>Total Students</span><br />
                                  <span className='data-count'>5</span>
                              </div>
                          </div>

                          <div className='count-box'>
                              <div className='count-logo' id='logo-b'>
                                  <MdOutlineLibraryBooks />
                              </div>
                              <div className='count-discription'>
                                  <span>Total Courses</span><br />
                                  <span className='data-count'>{coursedata.length}</span>
                              </div>
                          </div>

                          <div className='count-box'>
                              <div className='count-logo' id='logo-c'>
                                  <FaUserAlt />
                              </div>
                              <div className='count-discription'>
                                  <span>front-End Course</span><br />
                                  <span className='data-count'>8</span>
                              </div>
                          </div>

                          <div className='count-box'>
                              <div className='count-logo' id='logo-d'>
                                  <TiDownload />
                              </div>
                              <div className='count-discription'>
                                  <span>Back-End Course</span><br />
                                  <span className='data-count'>8</span>
                              </div>
                          </div>
                      </div>
{/* ------------------------------------------------------------------------------------------------------------------- */}
                      <div className='course-detail'>
                          <div className='course-sec'>
                                  <div>
                                      <span style={{fontSize:'large'}}>Our Courses</span><br />
                                      <span>30 Done this Month</span>
                                  </div>

                                  <div>
                                      <table>
                                          <tr>
                                              <th>COURSE NAME</th>
                                              <th>FEES</th>
                                              <th>DURATION</th>
                                          </tr>
                                          {coursedata.map((v) => {
                                              return (<tr key={v.id}>
                                                  <td>  <FaUserAlt />{v.name}</td>
                                                  <td>{v.amount}</td>
                                                  <td>{v.duration}</td>
                                              </tr>)
                                          })}
                                      </table>
                                  </div>

                          </div>

                          <div className='activity-heighlight'>
                              <span style={{fontSize:'larger',fontWeight:'600'}}>Courses overview</span><br />
                              <BiUpArrowAlt style={{ color: 'green',fontSize:'x-large' }} /><span style={{fontSize:'large' }}> this month</span><br /><br />


                              <div className='overview-content'>
                                  <BsBellFill style={{ color: 'green' }} />
                                  <div class="vl"></div>

                                  <TbMenuOrder style={{ color: 'red' }} />
                                  <div class="vl"></div>

                                  <BsCartFill style={{ color: 'blue' }} />
                                  <div class="vl"></div>

                                  <AiOutlineCreditCard style={{ color: 'orange' }} />
                                  <div class="vl"></div>

                                  <BsFillKeyFill style={{ color: 'pink' }} />
                                  <div class="vl"></div>

                                  <FaMoneyBill style={{ color: 'black' }} />
                                  <div class="vl"></div>
                              </div>

                              <div className='overview-text'>
                                  <div className='overview-info mb-1'>
                                      <span className='overview-texth'>Raesh Sing Rs5400, Paid</span><br />
                                      <span className='overview-textd'>22 DEC 7:20 PM</span><br /><br />
                                  </div>

                                  <div className='overview-infob mb-1'>
                                      <span className='overview-texth'>New order #1832412</span><br />
                                      <span className='overview-textd'>21 DEC 11 PM</span><br /><br />
                                  </div>

                                  <div className='overview-infob mb-1'>
                                      <span className='overview-texth'>Server payments for April</span><br />
                                      <span className='overview-textd'>21 DEC 9:34 PM</span><br /><br />
                                  </div>

                                  <div className='overview-infob mb-1'>
                                      <span className='overview-texth'>New card added for order #4395133</span><br />
                                      <span className='overview-textd'>20 DEC 2:20 AM</span><br /><br />
                                  </div>

                                  <div className='overview-infob mb-1'>
                                      <span className='overview-texth'>Unlock packages for development</span><br />
                                      <span className='overview-textd'>18 DEC 4:54 AM</span><br /><br />
                                  </div>

                                  <div className='overview-infob mb-1'>
                                      <span className='overview-texth'>New order #9583120</span><br />
                                      <span className='overview-textd'>17 DEC</span><br /><br />
                                  </div>


                              </div>



                          </div>

                      </div>
                      
              </div>
              <hr></hr>

              <div className='student-sec mb-5' id='student'>
              

              </div>
              <div className='courses-sec mb-5' id='courses'>

              </div>
              <div className='teachers-sec mb-5' id='teachers'>

              </div>
              </div>
          </div>
      </>
  );
}

export default Dashboard;
