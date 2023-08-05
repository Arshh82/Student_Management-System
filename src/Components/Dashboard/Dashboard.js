import React from 'react';
import './Dashboard.css'
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TiDownload } from "react-icons/ti";







const Dashboard = () => {
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
                              <div className='count-logo'  id='logo-b'>
                                  <MdOutlineLibraryBooks />
                              </div>
                              <div className='count-discription'>
                                  <span>Total Courses</span><br />
                                  <span className='data-count'>8</span>
                              </div>
                          </div>

                          <div className='count-box'>
                              <div className='count-logo'  id='logo-c'>
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

              </div>
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
