import React from 'react';
import './Dashboard.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';


import { FaUserAlt } from "react-icons/fa";
import { MdOutlineLibraryBooks,MdOutlineDashboardCustomize } from "react-icons/md";
import { TiDownload } from "react-icons/ti";
import { BiUpArrowAlt,BiBookContent } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { TbMenuOrder } from "react-icons/tb";
import { BsFillKeyFill, BsCartFill, BsClockHistory } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiStudentFill } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";







import { Modal, ModalBody, Row, Col } from 'reactstrap';
import { ModalHeader } from 'reactstrap';




import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, } from 'mdb-react-ui-kit';
import { withTheme } from '@emotion/react';










const Dashboard = () => {
    let [coursedata, updateCoursedata] = useState([]);
    let [studentdata, updateStudentdata] = useState([]);
    let [teacherdata, updateTeacherdata] = useState([]);
    useEffect(() => {
        show();
    })
    async function show() {
        var courseres = await axios.get("https://student-api-34v1.onrender.com/course");
        var studentres = await axios.get("https://student-api-34v1.onrender.com/students");
        var teacherres = await axios.get("https://student-api-34v1.onrender.com/teachers");
        updateCoursedata(courseres.data);
        updateStudentdata(studentres.data);
        updateTeacherdata(teacherres.data);
        // console.log(coursedata)
    }

    // -----------------------------------------------------------------------------------------------
    const [modal, updatemodal] = useState(false)
    const [modalb, updatemodalb] = useState(false)
    const [modalc, updatemodalc] = useState(false)
    // const [modald, updatemodald] = useState(true)
    let [teacher, updateTeacher] = useState({
        tname: "",
        temail: "",
        tpwd: "",
        tcontact: "",
        tjoindate: "",
        teducation: "",
        texperiance: "",
        tgender: "",
        tcourse: "",
        // timage: "",
    });
    // console.log(teacher)

    function change(e) {
        updateTeacher({ ...teacher, [e.target.name]: e.target.value });
    }
    // -----------------
    let [student, updateStudent] = useState({
        sname: "",
        semail: "",
        scontact: "",
        saddress: "",
        scollege: "",
        sdegree: "",
        samount: "",
        spaidamount: "",
        sdueamount: "",
        scourse: "",
        sCat: "",
    });

    function changeb(e) {
        updateStudent({ ...student, [e.target.name]: e.target.value });
    }
    // -------------------------------
    let [course, updateCourse] = useState({
        cname: "",
        camount: "",
        cduration: "",
    });

    function changec(e) {
        updateCourse({ ...course, [e.target.name]: e.target.value });
    }
    const [values, setValues] = useState([]);
    useEffect(() => {
        fetch("https://student-api-34v1.onrender.com/course")
            .then((data) => data.json())
            .then((val) => setValues(val));
    }, []);

    // ----------------------------------------------------------------------------------------------    

    const [active, setActive] = useState(false);
    const [activeb, setActiveb] = useState(false);
    const [activec, setActivec] = useState(false);
    const [actived, setActived] = useState(false);
  const handleClick = () => {
      setActive(false);
    setActiveb(false);
    setActivec(false);
    setActived(false);
  };

  const handleClickb = () => {
    setActiveb(true);
    setActive(true);
    setActivec(false);
    setActived(false);


  };
  const handleClickc = () => {
    setActiveb(false);
    setActive(true);
    setActivec(true);
    setActived(false);


  };
  const handleClickd = () => {
    setActiveb(false);
    setActive(true);
    setActivec(false);
    setActived(true);


  };

    return (
        <>
            <div className='dashboard-container'>
                <div className='sm-sidebar'>
                    <div className='mobile-sidebar'>

                    </div>

                </div>
            
            
            
            
                <div className='dashboard-menubar'>
                    <div className='menu-container'>

                        <p className='side-head mt-4'>Satyam<br/>Institute</p><br/>
                        <hr className='hrr'></hr>
                        <div>
                            <a href='#dashboard '>
                                <button className='side-menubtn mb-3' onClick={handleClick}
                                    style={{ backgroundColor: active ? "rgb(216, 0, 108)" : " green" }}><MdOutlineDashboardCustomize className='side-logo' /> Dashboard</button>
                            </a>
                            <a href='#student'>
                                <button className='side-menubtn mb-3' onClick={handleClickb}
                                    style={{ backgroundColor: activeb ? "green" : " rgb(216, 0, 108)" }}><PiStudentFill className='side-logo' /> Students</button>
                            </a>
                            <a href='#courses'>
                                <button className='side-menubtn mb-3' onClick={handleClickc}
                                    style={{ backgroundColor: activec ? "green" : " rgb(216, 0, 108)" }}><BiBookContent className='side-logo' /> Courses</button>
                            </a>
                            <a href='#teachers'>
                                <button className='side-menubtn mb-3' onClick={handleClickd}
                                    style={{ backgroundColor: actived ? "green" : " rgb(216, 0, 108)" }}><LiaChalkboardTeacherSolid className='side-logo' /> Teachers</button>
                            </a>

                        </div>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------------------- */}
                <div className='dashboard-content'>
                    <div className='dashboard-sec mb-5' id='dashboard'>
                        <div className='dashboard-h  mt-2' >
                            <RxHamburgerMenu style={{ fontSize: 'x-large' }} className='mobile-toggle' />
                            <span className='  ' style={{ float: 'right', fontSize: 'larger' }}> Dashboard</span>
                        </div>
                        <div className='dashboard-count'>
                            <div className='count-box'>
                                <div className='count-logo' >
                                    <FaUserAlt />
                                </div>
                                <div className='count-discription'>
                                    <span>Total Students</span><br />
                                    <span className='data-count'>{studentdata.length}</span>
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
                                    <span className='data-count'>2</span>
                                </div>
                            </div>

                            <div className='count-box'>
                                <div className='count-logo' id='logo-d'>
                                    <TiDownload />
                                </div>
                                <div className='count-discription'>
                                    <span>Back-End Course</span><br />
                                    <span className='data-count'>4</span>
                                </div>
                            </div>
                        </div>
                        {/* ------------------------------------------------------------------------------------------------------------------- */}
                        <div className='course-detail'>
                            <div className='course-sec'>
                                <div>
                                    <span style={{ fontSize: 'large' }}>Our Courses</span><br />
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
                                                                src='https://archive.nptel.ac.in/assets/csr_assets/noc_new_logo.png'
                                                                alt=''
                                                                style={{ width: '45px', height: '45px' }}
                                                                className='rounded-circle'
                                                            />
                                                            <div className='ms-3'>
                                                                <p className='fw-bold mb-1'>{v.cname}</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <p className='text-muted mb-0'>{v.camount}</p>
                                                    </td>
                                                    <td>
                                                        <p className='text-muted mb-0'>{v.cduration}</p>
                                                    </td>
                                                </tr>)
                                            })}
                                        </MDBTableBody>
                                    </MDBTable>
                                </div>

                            </div>

                            <div className='activity-heighlight'>
                                <span style={{ fontSize: 'larger', fontWeight: '600' }}>Courses overview</span><br />
                                <BiUpArrowAlt style={{ color: 'green', fontSize: 'x-large' }} /><span style={{ fontSize: 'large' }}> this month</span><br /><br />


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
                                    <span style={{ fontWeight: '600' }}>Website views</span><br />
                                    <span>Last Campaign Performance</span><br />
                                    <BsClockHistory /><span> campaign sent 2 days ago</span>
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
                                    <span style={{ fontWeight: '600' }}>Daily Sales</span><br />
                                    <span>(+15%) increase in today sales.</span><br />
                                    <BsClockHistory /><span> updated 4 min ago</span>
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
                                    <span style={{ fontWeight: '600' }}>Completed Tasks</span><br />
                                    <span>Last Campaign Performance</span><br />
                                    <BsClockHistory /><span> just updated</span>
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
                                                        src='https://www.vhv.rs/dpng/d/156-1566120_png-logo-for-student-transparent-png.png'
                                                        alt=''
                                                        style={{ width: '40px', height: '40px' }}
                                                        className='rounded-circle'
                                                    />
                                                    <div className='ms-2'>
                                                        <p className='fw-bold mb-1'>{v.sname}</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <p className='text-muted mb-0'>{v.semail}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.scontact}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.saddress}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.scollege}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.sdegree}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.scourse}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.samount}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.sduration}Months</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.spaidamount}</p>
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
                                                    "https://student-api-34v1.onrender.com/students/",
                                                    student
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
                                                        name="sname"
                                                        value={student.sname}
                                                        onChange={changeb}
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
                                                        name="semail"
                                                        value={student.semail}
                                                        onChange={changeb}
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
                                                        name="scontact"
                                                        value={student.scontact}
                                                        onChange={changeb}
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
                                                        name="saddress"
                                                        value={student.saddress}
                                                        onChange={changeb}
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
                                                        name="scollege"
                                                        value={student.scollege}
                                                        onChange={changeb}
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
                                                        name="sdegree"
                                                        value={student.sdegree}
                                                        onChange={changeb}
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
                                                        name="samount"
                                                        value={student.samount}
                                                        onChange={changeb}
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
                                                        name="spaidamount"
                                                        value={student.spaidamount}
                                                        placeholder="Paid Amount"
                                                        onChange={changeb}
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
                                                        name="sdueamount"
                                                        value={student.samount - student.spaidamount}
                                                        onChange={changeb}
                                                        className="form-control"
                                                        placeholder="Due Amount"
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div>
                                                    <label htmlFor="Select_Course">Select Course</label>
                                                    <select class="form-control" onChange={changeb} value={student.scourse} name="scourse" >
                                                        {values.map((optn, i) => (

                                                            <option key={i}  >
                                                                {optn.cname}
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
                                                        "https://student-api-34v1.onrender.com/course/",
                                                        course
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
                                                            name="cname"
                                                            value={course.cname}
                                                            onChange={changec}
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
                                                            type="number"
                                                            name="camount"
                                                            value={course.camount}
                                                            onChange={changec}
                                                            className="form-control"
                                                            placeholder="Amount"
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
                                                            type="text"
                                                            name="cduration"
                                                            value={course.cduration}
                                                            onChange={changec}
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
                                                            value={course.address}
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
                            <div class="input-group flex-nowrap">
                                <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" />
                            </div>
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
                                                        src='https://archive.nptel.ac.in/assets/csr_assets/noc_new_logo.png'
                                                        alt=''
                                                        style={{ width: '45px', height: '45px' }}
                                                        className='rounded-circle'
                                                    />
                                                    <div className='ms-3'>
                                                        <p className='fw-bold mb-1'>{v.cname}</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <p className='text-muted mb-0'>{v.camount}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.cduration}</p>
                                            </td>
                                        </tr>)
                                    })}
                                </MDBTableBody>
                            </MDBTable>
                        </div>


                    </div>
                    <hr></hr>
                    {/* ------------------------------------------------------------------------------------- */}

                    <div className='teachers-sec mb-5' id='teachers'>
                        <div className='student-h  mt-2' >
                            <span className='mt-2' style={{ float: 'right', fontSize: 'larger' }}> Teachers</span>
                        </div>
                        <div className='student-add'>
                            <div className='count-logo' >
                                <FaUserAlt />
                            </div>
                            <button className='student-btn mt-3' onClick={() => updatemodalc(true)}>+ Add Teacher</button>
                        </div>

                        <div>
                            <Modal size="lg" isOpen={modalc} toggle={() => updatemodalc(!modalc)}>
                                <ModalHeader toggle={() => updatemodalc(!modalc)}></ModalHeader>
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
                                                    "https://student-api-34v1.onrender.com/teachers/",
                                                    teacher
                                                );
                                                alert("Sucessfully Added Teacher");
                                                updatemodalc(false)
                                            }
                                            addData();
                                        }}
                                    >
                                        <Row>
                                            <Col lg={12}>
                                                <div>
                                                    <label htmlFor="name">Name</label>
                                                    <input
                                                        type="text"
                                                        name="tname"
                                                        value={teacher.tname}
                                                        onChange={change}
                                                        className="form-control"
                                                        placeholder="EnterName"
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            {/* <Col lg={6}>
                      <div>
                        <label htmlFor="id">Id No. </label>
                        <input
                          type="number"
                          name="employeesid"
                          onChange={change}
                          className="form-control"
                          placeholder="Id Number "
                        />
                      </div>
                    </Col> */}
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col lg={6}>
                                                <div>
                                                    <label htmlFor="email">E-Mail</label>
                                                    <input
                                                        type="email"
                                                        name="temail"
                                                        onChange={change}
                                                        value={teacher.temail}
                                                        className="form-control"
                                                        placeholder="Email Id"
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div>
                                                    <label htmlFor="password">Password</label>
                                                    <input
                                                        type="password"
                                                        name="tpwd"
                                                        value={teacher.tpwd}
                                                        onChange={change}
                                                        className="form-control"
                                                        placeholder="Enter Password"
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col lg={6}>
                                                <div>
                                                    <label htmlFor="mobile_no.">Mobile No.</label>
                                                    <input
                                                        maxLength={10}
                                                        type="number"
                                                        name="tcontact"
                                                        value={teacher.tcontact}
                                                        onChange={change}
                                                        className="form-control"
                                                        placeholder="Enter Mobile Number"
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div>
                                                    <label htmlFor="join_date">Join Date</label>
                                                    <input
                                                        type="date"
                                                        name="tjoindate"
                                                        value={teacher.tjoindate}
                                                        onChange={change}
                                                        className="form-control"
                                                        placeholder="Join Date"
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col md={6}>
                                                <div>
                                                    <label htmlFor="education">Education</label>
                                                    <input
                                                        type="text"
                                                        name="teducation"
                                                        value={teacher.teducation}
                                                        onChange={change}
                                                        className="form-control"
                                                        placeholder="Education"
                                                        required
                                                    />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div>
                                                    <label htmlFor="paid_mount">Work Experiance</label>
                                                    <input
                                                        type="text"
                                                        name="texperiance"
                                                        placeholder="Work Experiance"
                                                        value={teacher.texperiance}
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
                                                    <label htmlFor="Select_Gender">Select Gender</label>
                                                    <select class="form-control" name="tgender" value={teacher.tgender} onChange={change}  >
                                                        <option value="O">Other</option>
                                                        <option value="F">Female</option>
                                                        <option value="M">Male</option>
                                                    </select>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div>
                                                    <label htmlFor="Select_Course">Select Course</label>
                                                    <select class="form-control" onChange={change} value={teacher.tcourse} name="tcourse" >
                                                        {values.map((optn, i) => (

                                                            <option key={i}  >
                                                                {optn.cname}
                                                            </option>

                                                        ))}
                                                    </select>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br />

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
                        {/* ------------------------------------------------------------------------------------------------ */}
                        <div className='course-table'>
                            <div class="input-group flex-nowrap mt-2">
                                <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" />
                            </div>
                            <MDBTable align='middle'>
                                <MDBTableHead>
                                    <tr>
                                        <th scope='col'>ID</th>
                                        <th scope='col'>Teacher Name</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col'>Password</th>
                                        <th scope='col'>Contact</th>
                                        <th scope='col'>Join Date</th>
                                        <th scope='col'>Education</th>
                                        <th scope='col'>Experiance</th>
                                        <th scope='col'>Gender</th>
                                        <th scope='col'>Course</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {teacherdata.map((v) => {
                                        return (<tr key={v.id}>
                                            <td>
                                                <p className='text-muted mb-0'>{v.id}</p>
                                            </td>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <img
                                                        src='https://w1.pngwing.com/pngs/213/1021/png-transparent-google-logo-teacher-school-education-student-world-teachers-day-learning-teacher-education.png'
                                                        alt=''
                                                        style={{ width: '45px', height: '45px' }}
                                                        className='rounded-circle'
                                                    />
                                                    <div className='ms-3'>
                                                        <p className='fw-bold mb-1'>{v.tname}</p>
                                                    </div>
                                                </div>
                                            </td>


                                            <td>
                                                <p className='text-muted mb-0'>{v.temail}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.tpwd}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.tcontact}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.tjoindate}</p>
                                            </td>

                                            <td>
                                                <p className='text-muted mb-0'>{v.teducation}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.texperiance}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.tgender}</p>
                                            </td>
                                            <td>
                                                <p className='text-muted mb-0'>{v.tcourse}</p>
                                            </td>

                                        </tr>)
                                    })}
                                </MDBTableBody>
                            </MDBTable>
                        </div>






                    </div>

                </div>
            </div>
        </>
    );
}

export default Dashboard;
