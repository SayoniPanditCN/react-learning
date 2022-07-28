import React, { useEffect, useState } from "react";
import axios from 'axios'
import ListUserEntry from "../Components/ListUserEntry";
import { useNavigate } from "react-router";

const UserList = () => {

    const [AllUser, setAllUser] = useState([])
    const [ShowEdit, setShowEdit] = useState(false)
    const [EntryId, setEntryId] = useState()
    const navigate = useNavigate();


    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = () => {
        axios
            .get("http://localhost:3001/Registration")
            .then(res => {
                setAllUser(res.data)
            })
    }

    const handleEdit = (data) => {
        navigate("/Registration",
        {
            state: {
              id: data.id,
              Data: data
            }
        })
    }

    const handleDelete = (id) => {
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

        axios
        .delete(`http://localhost:3001/Registration/${id}`,Data)
        .then(res => {
            getUserData();
        })
    }

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

    const handleEditForm = (e) => {
        e.preventDefault()

        // const Data = {
        //     First_Name: Fname,
        //     Last_Name: Lname,
        // }

        // axios
        //     .put(`http://localhost:3001/Registration/${EntryId}`, Data)
        //     .then( res =>{
        //         console.log(res);
        //         getUserData();
        //         setFname("")
        //         setLname("")
        //         setShowEdit(!ShowEdit)
        //     })
    }


    return (
        <div>
            <div className="ListUserEntryHead">
                <div className="Element"><h4>Name</h4></div>
                <div className="Element"><h4>Email</h4></div>
                <div className="Element"><h4>Address</h4></div>
                <div className="Element"><h4>Gender</h4></div>
                <div className="Element"><h4>DOB</h4></div>
                <div className="Element"><h4>Highest Qualification</h4></div>
                <div className="Element"><h4>CV</h4></div>
                <div className="Element"><h4>User Image</h4></div>
                <div className="Element"><h4></h4></div>
            </div>
            {
                AllUser.map(info => {
                    return (
                        <ListUserEntry handleEdit={handleEdit} handleDelete={handleDelete} data={info} key={info.id} />
                    )
                })
            }
            
        </div>
    )
}

export default UserList;