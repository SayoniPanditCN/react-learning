import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Assets/style.scss";

const Form = () => {
  const [Data, setData] = useState([]);

  const [Name, setName] = useState();
  const handleName = (e) => {
    setName(e.target.value);
  };

  const [Email, setEmail] = useState();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const [Mobile, setMobile] = useState();
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const AllData = {
      Name: Name,
      Email: Email,
      Mobile: Mobile,
    };

    axios.post("http://localhost:3001/Data/", AllData)
    .then((res) => {
      window.location.reload()
    })
  };

  useEffect(() => {
    axios.get("http://localhost:3001/Data/").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="FormBox ">
      <h1>Form</h1>
      <form className="Form" onSubmit={handleFormSubmit}>
        <div className="Input">
          <input
            type="text"
            value={Name}
            onChange={handleName}
            placeholder="Enter your name"
          />
        </div>
        <div className="Input">
          <input
            type="email"
            value={Email}
            onChange={handleEmail}
            placeholder="Enter your email id"
          />
        </div>
        <div className="Input">
          <input
            type="number"
            value={Mobile}
            onChange={handleMobile}
            placeholder="Enter your mobile number"
          />
        </div>
        <div className="Input">
          <input
            className="submit"
            type="submit"
            placeholder="Enter your mobile number"
          />
        </div>
      </form>

      <div className="Details">
        <h1>Details</h1>
        <div className="Box">
          <div className="Head">
            <h4>Name</h4>
            <h4>Email id</h4>
            <h4>Mobile no</h4>
          </div>
          {Data.map((data) => {
            return (
              <div className="Det">
                <p>{data.Name}</p>
                <p>{data.Email}</p>
                <p>{data.Mobile}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Form;
