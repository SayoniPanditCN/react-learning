import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Assets/style.scss"
import ReactDatePicker from "react-datepicker";
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router'

const Registration = () => {

    const navigate = useNavigate()
    const locatinon = useLocation()

    console.log("locatinon", locatinon);

    const [ShowPopup, setShowPopup] = useState(false)
    const [ErrMessege, setErrMessege] = useState("")

    const [Fname, setFname] = useState("")
    const handleFname = (e) => {
        setFname(e.target.value)
    }

    const [Lname, setLname] = useState("")
    const handleLname = (e) => {
        setLname(e.target.value)
    }

    const [Email, setEmail] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [Password, setPassword] = useState("")
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const [ConfPassword, setConfPassword] = useState("")
    const handleConfPassword = (e) => {
        setConfPassword(e.target.value)
    }

    const [Address, setAddress] = useState("")
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }
    const [Gender, setGender] = useState("")
    const handleGender = (e) => {
        setGender(e.target.value)
        alert(Gender)
    }

    const [DOB, setDOB] = useState("")
    const handleDOB = (e) => {
        setDOB(e.target.value)
    }

    const [Qua, setQua] = useState("")
    const handleQua = (e) => {
        setQua(e.target.value)
    }

    const [DP, setDP] = useState("")
    const handleDP = (e) => {
        setDP(e.target.value)
    }

    const [CV, setCV] = useState("")
    const handleCV = (e) => {
        setCV(e.target.value)
    }


    useEffect(() => {
        if (locatinon.state) {
            setFname(locatinon.state.Data.First_Name)
            setLname(locatinon.state.Data.Last_Name)
            setEmail(locatinon.state.Data.Email)
            setPassword(locatinon.state.Data.Password)
            setConfPassword(locatinon.state.Data.ConfPassword)
            setAddress(locatinon.state.Data.Address)
            setGender(locatinon.state.Data.Gender)
            setDOB(locatinon.state.Data.Date_of_birth)
            setQua(locatinon.state.Data.Highest_Qualification)
            // setDP(locatinon.state.Data.User_Image)
            // setCV(locatinon.state.Data.CV)
        }
    }, [])


    const handleFormSubmit = (e) => {
        e.preventDefault()


        if (Fname === '' || Lname === '' || Email === '' || Password === '' || ConfPassword === '' || Address === '') {
            setShowPopup(true)
            setErrMessege("Please fill all the fields")
            return
        } else if (Password !== ConfPassword) {
            setShowPopup(true)
            setErrMessege("Confirm password should be same as password")
            return
        }

        const Data = {
            First_Name: Fname,
            Last_Name: Lname,
            Email: Email,
            Password: Password,
            ConfPassword: ConfPassword,
            Address: Address,
            Gender: Gender,
            Date_of_birth: DOB,
            Highest_Qualification: Qua,
            User_Image: DP,
            CV: CV
        }
        if (locatinon.state) {
            axios
                .put(`http://localhost:3001/Registration/${locatinon.state.id}`, Data)
                .then(res => {
                    // setFname("")
                    // setLname("")
                    navigate("/UserList")
                })
        } else if (!locatinon.state) {
            axios
                .post("http://localhost:3001/Registration", Data)
                .then(res => {
                    setShowPopup(false)
                    navigate("/Thanks")
                })
        }


    }




    const [Showlist, setShowlist] = useState(false)

    const handleNavList = () => {
        setShowlist(!Showlist)
    }

    const [Skills, setSkills] = useState([])
    const handleSkills = (e) => {
        //   Skills.push(e.target.value)
        //   Skills.includes(e.target.value) > -1
        //   console.log(Skills);
    }


    return (
        <div className="RegistrationBox">
            {/* <div className="Navbar">
               <Link to="/UserList">List</Link> 
            </div> */}
            {/* {Showlist &&
                <div className="RegList">
                    {
                        AllUser.map(data => {
                            return (
                                <div style={{ textAlign: "left" }}>
                                    {data.First_Name} {data.First_Name}
                                </div>
                            )
                        })
                    }
                </div>
            } */}
            <h2>Registration Form</h2>
            {ShowPopup && <div className="Popup">
                <div className="Error">Error!</div>
                <div className="Mess">{ErrMessege}</div>
            </div>}

            <div>
                <form >
                    <div className="Input">
                        <input type="text" value={Fname} onChange={handleFname} placeholder="First Name" />
                        <div className="Errormsg">
                            {((ShowPopup === true) && !Fname) && <div>First Name required!</div>}
                        </div>
                    </div>
                    <div className="Input">
                        <input type="text" value={Lname} onChange={handleLname} placeholder="Last Name" />
                        <div className="Errormsg">
                            {((ShowPopup === true) && !Lname) && <div>Last Name required!</div>}
                        </div>
                    </div>
                    <div className="Input">
                        <input type="email" value={Email} onChange={handleEmail} placeholder="Email" />
                        <div className="Errormsg">
                            {((ShowPopup === true) && !Email) && <div>Email required!</div>}
                        </div>
                    </div>
                    <div className="Input">
                        <input type="password" value={Password} onChange={handlePassword} placeholder="Password" />
                        <div className="Errormsg">
                            {((ShowPopup === true) && !Password) && <div>Password required!</div>}
                        </div>
                    </div>
                    <div className="Input">
                        <input type="password" value={ConfPassword} onChange={handleConfPassword} placeholder="Confirm password" />
                        <div className="Errormsg">
                            {((ShowPopup === true) && !ConfPassword) && <div>Confirm Password required!</div>}
                        </div>
                    </div>
                    <div className="Input">
                        <input type="text" value={Address} onChange={handleAddress} placeholder="Address" />
                        <div className="Errormsg">
                            {((ShowPopup === true) && !Address) && <div>Address required!</div>}
                        </div>
                    </div>
                    <div className="Input">
                        <div> select your gender</div>
                        <select onChange={handleGender}>
                            <option value="Select">Select</option>
                            <option value="Female">Female</option>
                            <option value="Male" >Male</option>
                            <option value="Other" >Other</option>
                        </select>
                        <div className="Errormsg">
                            {((ShowPopup === true) && !Address) && <div>Address required!</div>}
                        </div>
                    </div>
                    <div className="Input">
                        <input type="date" value={DOB} onChange={handleDOB} />
                        <div className="Errormsg">
                            {((ShowPopup === true) && !DOB) && <div>Date of birth required!</div>}
                        </div>
                    </div>
                    <div className="Input">
                        <div> select your highest qualification</div>
                        <select onChange={handleQua}>
                            <option value="select">Select</option>
                            <option value="B.tech">B.tech</option>
                            <option value="M.tech" >M.tech</option>
                            <option value="MBA" >MBA</option>
                            <option value="MCA" >MCA</option>
                            <option value="MSc" >MSc</option>
                        </select>
                        <div className="Errormsg">
                            {((ShowPopup === true) && !Address) && <div>Address required!</div>}
                        </div>
                    </div>
                    {/* <div className="Input">
                        <div >
                            <input onClick={handleSkills} type="checkbox" id="React" name="React" value="React" />
                            <label for="React">React</label>
                            <input onClick={handleSkills} type="checkbox" id="Angular" name="Angular" value="Angular" />
                            <label for="Angular">Angular</label>
                            <input onClick={handleSkills} type="checkbox" id="Vue" name="Vue" value="Vue" />
                            <label for="Vue">Vue</label>
                        </div>
                    </div> */}
                    <div className="Input">
                        <div>Upload your image</div>
                        <input type="file" value={DP} onChange={handleDP} />
                        <div className="Errormsg">
                            {((ShowPopup === true) && !DP) && <div>DP required!</div>}
                        </div>
                    </div>
                    <div className="Input">
                        <div>Upload your CV</div>
                        <input type="file" value={CV} onChange={handleCV} />
                        <div className="Errormsg">
                            {((ShowPopup === true) && !CV) && <div>CV required!</div>}
                        </div>
                    </div>
                    <div className="Input Submit">

                        <input onClick={handleFormSubmit} type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration