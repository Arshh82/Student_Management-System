import React from 'react';
import './Dashboard.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';


import { FaUserAlt } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TiDownload } from "react-icons/ti";
import { BiUpArrowAlt } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { TbMenuOrder } from "react-icons/tb";
import { BsFillKeyFill,BsCartFill,BsClockHistory } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";


import { Modal, ModalBody, Row , Col } from 'reactstrap'; 
import { ModalHeader } from 'reactstrap';




import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, } from 'mdb-react-ui-kit';
import { withTheme } from '@emotion/react';










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
    
// -----------------------------------------------------------------------------------------------
    const [modal,updatemodal] = useState(false)
    const [modalb,updatemodalb] = useState(false)
    let [data, updatedata] = useState([]);
    let [product, updateproduct] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
        college: "",
        degree: "",
        amount: "",
        paidamount: "",
        dueamount: "",
        course: "",
    });
    
    function change(e) {
      updateproduct({ ...product, [e.target.name]: e.target.value });
    }
    const [values, setValues] = useState([]);
  useEffect(() => {
    fetch("https://student-api-34v1.onrender.com/course")
      .then((data) => data.json())
      .then((val) => setValues(val));
  }, []);
    
// ----------------------------------------------------------------------------------------------    
    

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
                      <div className='dashboard-h  mt-2' >
                          <RxHamburgerMenu style={{ fontSize: 'x-large' }} />
                          <span className='  ' style={{ float: 'right',fontSize:'larger' }}> Dashboard</span>
                      </div>
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

                              <div className='table-div'>
                                  <MDBTable align='middle'>
                                      <MDBTableHead>
                                          <tr>
                                              <th scope='col'>Course Name</th>
                                              <th scope='col'>Fees</th>
                                              <th scope='col'>Duration</th>
                                          </tr>
                                      </MDBTableHead>
                                      <MDBTableBody>
                                          {coursedata.map((v) => {
                                              return (<tr key={v.id}>
                                                  <td>
                                                      <div className='d-flex align-items-center'>
                                                          <img
                                                              src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                              alt=''
                                                              style={{ width: '45px', height: '45px' }}
                                                              className='rounded-circle'
                                                          />
                                                          <div className='ms-3'>
                                                              <p className='fw-bold mb-1'>{v.name}</p>
                                                          </div>
                                                      </div>
                                                  </td>

                                                  <td>
                                                      <p className='text-muted mb-0'>{v.amount}</p>
                                                  </td>
                                                  <td>
                                                      <p className='text-muted mb-0'>{v.duration}</p>
                                                  </td>
                                              </tr>)
                                          })}
                                      </MDBTableBody>
                                  </MDBTable>
                              </div>

                          </div>

                          <div className='activity-heighlight'>
                              <span style={{fontSize:'larger',fontWeight:'600'}}>Courses overview</span><br />
                              <BiUpArrowAlt style={{ color: 'green',fontSize:'x-large' }} /><span style={{fontSize:'large' }}> this month</span><br /><br />


                              <div className='overview-content'>
                                  <BsBellFill style={{ color: 'green' }} />
                                  <div class="vl"></div>

                                  <TbMenuOrder style={{ color: 'red' }} />
                                  <div className="vl"></div>

                                  <BsCartFill style={{ color: 'blue' }} />
                                  <div className="vl"></div>

                                  <AiOutlineCreditCard style={{ color: 'orange' }} />
                                  <div className="vl"></div>

                                  <BsFillKeyFill style={{ color: 'pink' }} />
                                  <div className="vl"></div>

                                  <FaMoneyBill style={{ color: 'black' }} />
                                  <div className="vl"></div>
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
 {/* ------------------------------------------------------------------------------------------------------------ */}
                      <div className='graph-section'>
                          <div className='graph-a mb-6'>
                              <div className='chart-a mb-4'>
                                  <BarChart
                                      xAxis={[
                                          {
                                              id: 'barCategories',
                                              data: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                                              scaleType: 'band',
                                          },
                                      ]}
                                      series={[
                                          {
                                              data: [20, 40, 60, 50, 30, 10, 15],
                                          },
                                      ]}
                                  //   width={300}
                                  //   height={300}
                                  />

                              </div>
                              <div className='chart-a-text'>
                                  <span style={{fontWeight:'600'}}>Website views</span><br />
                                  <span>Last Campaign Performance</span><br/>
                                  <BsClockHistory/><span> campaign sent 2 days ago</span>
                              </div>

                          </div>

                          <div className='graph-b mb-6'>
                          <div className='chart-a mb-4'>
                              <LineChart
                                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                  series={[
                                      {
                                          data: [2, 5.5, 2, 8.5, 1.5, 5],
                                      },
                                  ]}
                                //   width={500}
                                //   height={300}
                              />
                          </div>
                          <div className='chart-a-text'>
                                  <span style={{fontWeight:'600'}}>Daily Sales</span><br />
                                  <span>(+15%) increase in today sales.</span><br/>
                                  <BsClockHistory/><span> updated 4 min ago</span>
                              </div>

                          </div>
                          <div className='graph-c'>
                          <div className='chart-a mb-4'>
                              <LineChart
                                  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                  series={[
                                      {
                                          data: [2, 8.5, 2, 5.5, 6.5, 5],
                                          area: true,
                                      },
                                  ]}
                                //   width={500}
                                //   height={300}
                              />

                          </div>
                          <div className='chart-a-text'>
                                  <span style={{fontWeight:'600'}}>Completed Tasks</span><br />
                                  <span>Last Campaign Performance</span><br/>
                                  <BsClockHistory/><span> just updated</span>
                              </div>

                          </div>
                      </div>
              </div>
              <hr></hr>
{/* ---------------------------------------------------------------------------------------------------------------------               */}

                  <div className='student-sec mb-5' id='student'>

                      <div className='student-h  mt-2' >
                          <span className='mt-2' style={{ float: 'right', fontSize: 'larger' }}> All Students</span>
                      </div>

                      <div className='student-addsec'>
                          <div className='student-add'>
                              <div className='count-logo' >
                                  <FaUserAlt />
                              </div>
                              <button className='student-btn mt-3' onClick={() => updatemodal(true)}> + Add Student</button>
                          </div>
                      </div>

                      <div className='student-tablee'>
                          <div className='student-table-head'>
                              <div class="input-group flex-nowrap">
                                  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                              </div>

                          </div>
                      <MDBTable align='middle'>
                                      <MDBTableHead>
                                          <tr>
                                              <th scope='col'>Student Name</th>
                                              <th scope='col'>Email</th>
                                              <th scope='col'>Contact</th>
                                              <th scope='col'>Address</th>
                                              <th scope='col'>College</th>
                                              <th scope='col'>Degree</th>
                                              <th scope='col'>Course</th>
                                              <th scope='col'>Fees</th>
                                              <th scope='col'>Duration</th>
                                              <th scope='col'>Paid</th>
                                              
                                          </tr>
                                      </MDBTableHead>
                                      <MDBTableBody>
                                          {studentdata.map((v) => {
                                              return (<tr key={v.id}>
                                                  <td>
                                                      <div className='d-flex align-items-center'>
                                                          <img
                                                              src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                              alt=''
                                                              style={{ width: '40px', height: '40px' }}
                                                              className='rounded-circle'
                                                          />
                                                          <div className='ms-2'>
                                                              <p className='fw-bold mb-1'>{v.name}</p>
                                                          </div>
                                                      </div>
                                                  </td>

                                                  <td>
                                                      <p className='text-muted mb-0'>{v.email}</p>
                                                  </td>
                                                  <td>
                                                      <p className='text-muted mb-0'>{v.contact}</p>
                                                  </td>
                                                  <td>
                                                      <p className='text-muted mb-0'>{v.address}</p>
                                                  </td>
                                                  <td>
                                                      <p className='text-muted mb-0'>{v.college}</p>
                                                  </td>
                                                  <td>
                                                      <p className='text-muted mb-0'>{v.degree}</p>
                                                  </td>
                                                  <td>
                                                      <p className='text-muted mb-0'>{v.course}</p>
                                                  </td>
                                                  <td>
                                                      <p className='text-muted mb-0'>{v.amount}</p>
                                                  </td>
                                                  <td>
                                                      <p className='text-muted mb-0'>{v.duration}Months</p>
                                                  </td>
                                                  <td>
                                                      <p className='text-muted mb-0'>{v.paidamount}</p>
                                                  </td>
                                              </tr>)
                                          })}
                                      </MDBTableBody>
                                  </MDBTable>

                          <Modal size="lg" isOpen={modal} toggle={() => updatemodal(!modal)}>
                              <ModalHeader toggle={() => updatemodal(!modal)}></ModalHeader>
                              <ModalBody>
                                  <center>
                                      <h3>Student Ragistration</h3>
                                  </center>
                                  <br />
                                  <form
                                      onSubmit={(e) => {
                                          e.preventDefault();
                                          async function addData() {
                                              var res = await axios.post(
                                                  "https://student-api-34v1.onrender.com/students",
                                                  product
                                              );
                                              alert("Sucessfully Added Student");
                                              updatemodal(false)
                                          }
                                          addData();
                                      }}
                                  >
                                      <Row>
                                          <Col lg={6}>
                                              <div>
                                                  <label htmlFor="name">Name</label>
                                                  <input
                                                      type="text"
                                                      name="name"
                                                      value={product.name}
                                                      onChange={change}
                                                      className="form-control"
                                                      placeholder="EnterName"
                                                      required
                                                  />
                                              </div>
                                          </Col>
                                          <Col lg={6}>
                                              <div>
                                                  <label htmlFor="email">Email</label>
                                                  <input
                                                      type="email"
                                                      name="email"
                                                      value={product.email}
                                                      onChange={change}
                                                      className="form-control"
                                                      placeholder="Email"
                                                      required
                                                  />
                                              </div>
                                          </Col>
                                      </Row>
                                      <br />
                                      <Row>
                                          <Col lg={6}>
                                              <div>
                                                  <label htmlFor="mobile">Mobile No.</label>
                                                  <input
                                                      type="number"
                                                      name="contact"
                                                      value={product.contact}
                                                      onChange={change}
                                                      className="form-control"
                                                      placeholder="Mobile No."
                                                      required
                                                  />
                                              </div>
                                          </Col>
                                          <Col lg={6}>
                                              <div>
                                                  <label htmlFor="address">Address</label>
                                                  <input
                                                      type="text"
                                                      name="address"
                                                      value={product.address}
                                                      onChange={change}
                                                      className="form-control"
                                                      placeholder="Address"
                                                      required
                                                  />
                                              </div>
                                          </Col>
                                      </Row>
                                      <br />
                                      <Row>
                                          <Col lg={6}>
                                              <div>
                                                  <label htmlFor="college">College</label>
                                                  <input
                                                      type="text"
                                                      name="college"
                                                      value={product.college}
                                                      onChange={change}
                                                      className="form-control"
                                                      placeholder="College"
                                                      required
                                                  />
                                              </div>
                                          </Col>
                                          <Col lg={6}>
                                              <div>
                                                  <label htmlFor="degree">Degree</label>
                                                  <input
                                                      type="text"
                                                      name="degree"
                                                      value={product.degree}
                                                      onChange={change}
                                                      className="form-control"
                                                      placeholder="Degree"
                                                      required
                                                  />
                                              </div>
                                          </Col>
                                      </Row>
                                      <br />
                                      <Row>
                                          <Col md={6}>
                                              <div>
                                                  <label htmlFor="total_mount">Total Amount</label>
                                                  <input
                                                      type="number"
                                                      name="amount"
                                                      value={product.amount}
                                                      onChange={change}
                                                      className="form-control"
                                                      placeholder="Total Amount"
                                                      required

                                                  />
                                              </div>
                                          </Col>
                                          <Col md={6}>
                                              <div>
                                                  <label htmlFor="paid_mount">Paid Amount</label>
                                                  <input
                                                      type="number"
                                                      name="paidamount"
                                                      value={product.paidamount}
                                                      placeholder="Paid Amount"
                                                      onChange={change}
                                                      className="form-control"
                                                      required
                                                  />
                                              </div>
                                          </Col>
                                      </Row>
                                      <br />
                                      <Row>
                                          <Col md={6}>
                                              <div>
                                                  <label htmlFor="due_mount">Due Amount</label>
                                                  <input
                                                      type="number"
                                                      name="dueamount"
                                                      value={product.dueamount}
                                                      onChange={change}
                                                      className="form-control"
                                                      placeholder="Due Amount"
                                                      required
                                                  />
                                              </div>
                                          </Col>
                                          <Col md={6}>
                                              <div>
                                                  <label htmlFor="Select_Course">Select Course</label>
                                                  <select onChange={change} value={product.course} name="course" >
                                                      {values.map((optn, i) => (
                                                       
                                                          <option key={i}  >
                                                              {optn.name}
                                                          </option>
                                                          
                                                      ))}
                                                  </select>
                                              </div>
                                          </Col>
                                      </Row>
                                      <br />
                                      <center>
                                          <button className="btn btn-danger " type="submit">
                                              Sign Up
                                          </button>
                                      </center>
                                  </form>
                              </ModalBody>
                          </Modal>

                      </div>

                  </div>
                  <hr></hr>

{/* ---------------------------------------------------------------------------------------------------------------------------                   */}
                  <div className='courses-sec mb-5' id='courses'>
                      <div className='student-h  mt-2' >
                          <span className='mt-2' style={{ float: 'right', fontSize: 'larger' }}> All Courses</span>
                      </div>

                      <div className='student-addsec'>
                          <div className='student-add'>
                              <div className='count-logo' >
                                  <FaUserAlt />
                              </div>
                              <button className='student-btn mt-3' onClick={() => updatemodalb(true)}> + Add Courses</button>
                          </div>
                          <div>
                          <Modal size="lg" isOpen={modalb} toggle={() => updatemodalb(!modalb)}>
                              <ModalHeader toggle={() => updatemodalb(!modalb)}></ModalHeader>
                              <ModalBody>
                                  <center>
                                      <h3>Course Ragistration</h3>
                                  </center>
                                  <br />
                                  <form
                                      onSubmit={(e) => {
                                          e.preventDefault();
                                          async function addData() {
                                              var res = await axios.post(
                                                  "https://student-api-34v1.onrender.com/course",
                                                  product
                                              );
                                              alert("Sucessfully Added Courses");
                                              updatemodalb(false)
                                          }
                                          addData();
                                      }}
                                  >
                                      <Row>
                                          <Col lg={6}>
                                              <div>
                                                  <label htmlFor="name">Course Name</label>
                                                  <input
                                                      type="text"
                                                      name="name"
                                                      value={product.name}
                                                      onChange={change}
                                                      className="form-control"
                                                      placeholder="EnterName"
                                                      required
                                                  />
                                              </div>
                                          </Col>
                                          <Col lg={6}>
                                              <div>
                                                  <label htmlFor="email">Fees</label>
                                                  <input
                                                      type="email"
                                                      name="email"
                                                      value={product.email}
                                                      onChange={change}
                                                      className="form-control"
                                                      placeholder="Email"
                                                      required
                                                  />
                                              </div>
                                          </Col>
                                      </Row>
                                      <br />
                                      <Row>
                                          <Col lg={6}>
                                              <div>
                                                  <label htmlFor="mobile">Duration</label>
                                                  <input
                                                      type="number"
                                                      name="contact"
                                                      value={product.contact}
                                                      onChange={change}
                                                      className="form-control"
                                                      placeholder="Mobile No."
                                                      required
                                                  />
                                              </div>
                                          </Col>
                                          <Col lg={6}>
                                              <div>
                                                  <label htmlFor="address">Category</label>
                                                  <input
                                                      type="text"
                                                      name="address"
                                                      value={product.address}
                                                      onChange={change}
                                                      className="form-control"
                                                      placeholder="Address"
                                                      required
                                                  />
                                              </div>
                                          </Col>
                                      </Row>
                                      <br />
                                     
                                      <br />
                                      <center>
                                          <button className="btn btn-danger " type="submit">
                                              Sign Up
                                          </button>
                                      </center>
                                  </form>
                              </ModalBody>
                          </Modal>
                          </div>
                          


                      </div>
                      <div className='course-table'>
                      <MDBTable align='middle'>
                                      <MDBTableHead>
                                          <tr>
                                              <th scope='col'>Course Name</th>
                                              <th scope='col'>Fees</th>
                                              <th scope='col'>Duration</th>
                                          </tr>
                                      </MDBTableHead>
                                      <MDBTableBody>
                                          {coursedata.map((v) => {
                                              return (<tr key={v.id}>
                                                  <td>
                                                      <div className='d-flex align-items-center'>
                                                          <img
                                                              src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                              alt=''
                                                              style={{ width: '45px', height: '45px' }}
                                                              className='rounded-circle'
                                                          />
                                                          <div className='ms-3'>
                                                              <p className='fw-bold mb-1'>{v.name}</p>
                                                          </div>
                                                      </div>
                                                  </td>

                                                  <td>
                                                      <p className='text-muted mb-0'>{v.amount}</p>
                                                  </td>
                                                  <td>
                                                      <p className='text-muted mb-0'>{v.duration}</p>
                                                  </td>
                                              </tr>)
                                          })}
                                      </MDBTableBody>
                                  </MDBTable>
                      </div>


                  </div>
                  <hr></hr>

                  
              <div className='teachers-sec mb-5' id='teachers'>

              </div>
              </div>
          </div>
      </>
  );
}

export default Dashboard;
