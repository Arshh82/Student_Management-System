import React from 'react';
import './Dashboard.css'

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
                <div className='count-box'><p>Total Students</p></div>
                <div className='count-box'><p>Total Courses</p></div>
                <div className='count-box'><p>front-End Course</p></div>
                <div className='count-box'><p>Back-End Course</p></div>
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
