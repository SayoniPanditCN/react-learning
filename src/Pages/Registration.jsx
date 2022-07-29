import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Assets/style.scss";
import { useNavigate, useLocation } from "react-router";
import { Country, State, City } from "country-state-city";

const Registration = () => {
  const AllCountries = Country.getAllCountries();
  const AllStates = State.getAllStates();
  const AllCity = City.getAllCities();

  console.log("AllCountries", AllCountries);
  console.log("AllStates", AllStates);
  console.log("AllCity", AllCity);

  const navigate = useNavigate();
  const locatinon = useLocation();

  const [ShowPopup, setShowPopup] = useState(false);
  const [ErrMessege, setErrMessege] = useState("");

  const [Fname, setFname] = useState("");
  const handleFname = (e) => {
    setFname(e.target.value);
  };

  const [Lname, setLname] = useState("");
  const handleLname = (e) => {
    setLname(e.target.value);
  };

  const [Email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const [Password, setPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const [ConfPassword, setConfPassword] = useState("");
  const handleConfPassword = (e) => {
    setConfPassword(e.target.value);
  };

  const [Address, setAddress] = useState("");
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const [Gender, setGender] = useState("");
  const handleGender = (e) => {
    setGender(e.target.value);
    alert(Gender);
  };

  const [DOB, setDOB] = useState("");
  const handleDOB = (e) => {
    setDOB(e.target.value);
  };

  const [Qua, setQua] = useState("");
  const handleQua = (e) => {
    setQua(e.target.value);
  };

  const [DP, setDP] = useState("");
  const handleDP = (e) => {
    setDP(e.target.value);
  };

  const [CV, setCV] = useState("");
  const handleCV = (e) => {
    setCV(e.target.value);
  };
  const [country, setcountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const handleCountry = (e) => {
    setcountry(e.target.value);
    setCountryCode(
      e.target.options[e.target.selectedIndex].getAttribute("code")
    );
  };

  const handleSelectedCountry = (e) => {};

  const [state, setstate] = useState("");
  const [stateCode, setStateCode] = useState("");
  const handleState = (e) => {
    setstate(e.target.value);
    setStateCode(e.target.options[e.target.selectedIndex].getAttribute("code"));
  };

  const [city, setCity] = useState("");
  const handleCity = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    if (locatinon.state) {
      setFname(locatinon.state.Data.First_Name);
      setLname(locatinon.state.Data.Last_Name);
      setEmail(locatinon.state.Data.Email);
      setPassword(locatinon.state.Data.Password);
      setConfPassword(locatinon.state.Data.ConfPassword);
      setAddress(locatinon.state.Data.Address);
      setGender(locatinon.state.Data.Gender);
      setDOB(locatinon.state.Data.Date_of_birth);
      setQua(locatinon.state.Data.Highest_Qualification);
      // setDP(locatinon.state.Data.User_Image)
      // setCV(locatinon.state.Data.CV)
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      Fname === "" ||
      Lname === "" ||
      Email === "" ||
      Password === "" ||
      ConfPassword === "" ||
      Address === ""
    ) {
      setShowPopup(true);
      setErrMessege("Please fill all the fields");
      return;
    } else if (Password !== ConfPassword) {
      setShowPopup(true);
      setErrMessege("Confirm password should be same as password");
      return;
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
      CV: CV,
      Country : country,
      State : state,
      City : city
    };
    if (locatinon.state) {
      axios
        .put(`http://localhost:3001/Registration/${locatinon.state.id}`, Data)
        .then((res) => {
          // setFname("")
          // setLname("")
          navigate("/UserList");
        });
    } else if (!locatinon.state) {
      axios.post("http://localhost:3001/Registration", Data).then((res) => {
        setShowPopup(false);
        navigate("/Thanks");
      });
    }
  };

  const [Showlist, setShowlist] = useState(false);

  return (
    <div className="RegistrationBox">
      <h2>Registration Form</h2>
      {ShowPopup && (
        <div className="Popup">
          <div className="Error">Error!</div>
          <div className="Mess">{ErrMessege}</div>
        </div>
      )}

      <div>
        <form>
          <div className="Input">
            <input
              type="text"
              value={Fname}
              onChange={handleFname}
              placeholder="First Name"
            />
            <div className="Errormsg">
              {ShowPopup === true && !Fname && <div>First Name required!</div>}
            </div>
          </div>
          <div className="Input">
            <input
              type="text"
              value={Lname}
              onChange={handleLname}
              placeholder="Last Name"
            />
            <div className="Errormsg">
              {ShowPopup === true && !Lname && <div>Last Name required!</div>}
            </div>
          </div>
          <div className="Input">
            <input
              type="email"
              value={Email}
              onChange={handleEmail}
              placeholder="Email"
            />
            <div className="Errormsg">
              {ShowPopup === true && !Email && <div>Email required!</div>}
            </div>
          </div>
          <div className="Input">
            <input
              type="password"
              value={Password}
              onChange={handlePassword}
              placeholder="Password"
            />
            <div className="Errormsg">
              {ShowPopup === true && !Password && <div>Password required!</div>}
            </div>
          </div>
          <div className="Input">
            <input
              type="password"
              value={ConfPassword}
              onChange={handleConfPassword}
              placeholder="Confirm password"
            />
            <div className="Errormsg">
              {ShowPopup === true && !ConfPassword && (
                <div>Confirm Password required!</div>
              )}
            </div>
          </div>
          <div className="Input">
            <input
              type="text"
              value={Address}
              onChange={handleAddress}
              placeholder="Address"
            />
            <div className="Errormsg">
              {ShowPopup === true && !Address && <div>Address required!</div>}
            </div>
          </div>

          <div className="Input">
            <div> select your country</div>
            <select onChange={handleCountry} onClick={handleSelectedCountry}>
              <option value="">Select</option>
              {AllCountries.map((data) => {
                return (
                  <option key={data.name} value={data.name} code={data.isoCode}>
                    {data.name}
                  </option>
                );
              })}
            </select>
            <div className="Errormsg">
              {ShowPopup === true && !country && <div>Country required!</div>}
            </div>
          </div>
          <div className="Input">
            <div> select your state</div>
            <select onChange={handleState}>
              <option value="">Select</option>
              {AllStates.map((data) => {
                if (countryCode === data.countryCode) {
                  return (
                    <option
                      value={data.name}
                      code={data.isoCode}
                      key={data.name}
                    >
                      {data.name}
                    </option>
                  );
                }
              })}
            </select>
            <div className="Errormsg">
              {ShowPopup === true && !state && <div>State required!</div>}
            </div>
          </div>

          <div className="Input">
            <div> select your city</div>
            <select onChange={handleCity}>
            <option value="">Select</option>
              {AllCity.map((data) => {
                if (stateCode === data.stateCode) {
                  return (
                    <option value={data.name} code={data.isoCode}>
                      {data.name}
                    </option>
                  );
                }
              })}
            </select>
            <div className="Errormsg">
              {ShowPopup === true && !city && <div>City required!</div>}
            </div>
          </div>

          <div className="Input">
            <div> select your gender</div>
            <select onChange={handleGender}>
              <option value="">Select</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
            <div className="Errormsg">
              {ShowPopup === true && !Gender && <div>Gender required!</div>}
            </div>
          </div>
          <div className="Input">
            <input type="date" value={DOB} onChange={handleDOB} />
            <div className="Errormsg">
              {ShowPopup === true && !DOB && <div>Date of birth required!</div>}
            </div>
          </div>
          <div className="Input">
            <div> select your highest qualification</div>
            <select onChange={handleQua}>
              <option value="select">Select</option>
              <option value="B.tech">B.tech</option>
              <option value="M.tech">M.tech</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="MSc">MSc</option>
            </select>
            <div className="Errormsg">
              {ShowPopup === true && !Qua && <div>highest qualification required!</div>}
            </div>
          </div>
          <div className="Input">
            <div>Upload your image</div>
            <input type="file" value={DP} onChange={handleDP} />
            <div className="Errormsg">
              {ShowPopup === true && !DP && <div>DP required!</div>}
            </div>
          </div>
          <div className="Input">
            <div>Upload your CV</div>
            <input type="file" value={CV} onChange={handleCV} />
            <div className="Errormsg">
              {ShowPopup === true && !CV && <div>CV required!</div>}
            </div>
          </div>
          <div className="Input Submit">
            <input onClick={handleFormSubmit} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
