import { useState } from 'react'
import './Home.css'


function Home() {
  const [data, setData] = useState({
    Name: "",
    UserName: "",
    Email: "",
    Mobile: "",
    Consent: false
  })

  const [errors, setErrors] = useState({
    Name: "",
    UserName: "",
    Email: "",
    Mobile: "",
    Consent: ""
  })

  const handleInput= (e) => {
    setData({
      ...data, [e.target.name] : e.target.name === "Consent" ? e.target.checked : e.target.value  
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let error = {};

    if (!data.Name.trim()) error.Name = "Field is required";
    if (!data.UserName.trim()) error.UserName = "Field is required";
    if (!data.Email.trim()) error.Email = "Field is required";
    else if (!/\S+@\S+\.\S+/.test(data.Email)) error.Email = "Email is invalid";
    if (!data.Mobile.trim()) error.Mobile = "Field is required";
    else if (!/^\d{10}$/.test(data.Mobile)) error.Mobile = "Contact number is invalid";
    if (!data.Consent) error.Consent = "Check this box if you want to proceed";

    setErrors(error);

    if(Object.keys(error).length>0) return ;

    alert("Form submitted Successfully")

    localStorage.setItem("user", JSON.stringify(data));

    setData({
      Name: "",
      UserName: "",
      Email: "",
      Mobile: "",
      Consent: false
    })

  }

  return (
    <div className="container">
    <div className="background">
      <h1>Discover new things on Superapp</h1>
    </div>
    <div className="form-container">
      <h1>Super App</h1>
      <h4>Create your new account</h4>
      <form onSubmit={handleSubmit} className="form">
        <input 
          type='text'
          name="Name"
          value={data.Name}
          onChange={handleInput}
          placeholder='Name'
          className="input"
        />
        <span className="error">{errors.Name}</span>
        <input 
          type='text'
          name="UserName"
          value={data.UserName}
          onChange={handleInput}
          placeholder='UserName'
          className="input"
        />
        <span className="error">{errors.UserName}</span>
        <input 
          type='email'
          name="Email"
          value={data.Email}
          onChange={handleInput}
          placeholder='Email'
          className="input"
        />
        <span className="error">{errors.Email}</span>
        <input 
          type='tel'
          name="Mobile"
          value={data.Mobile}
          onChange={handleInput}
          placeholder='Mobile'
          className="input"
        />
        <span className="error">{errors.Mobile}</span>
        <div className="consent-container">
          <input 
            type='checkbox'
            name="Consent"
            value={data.Consent}
            onChange={handleInput}
            className="checkbox"
          />
          <label htmlFor='Consent'>Share my registration data with Superapp</label>
        </div>
        <span className="error">{errors.Consent}</span>
        <button className="submit-button">
          SIGN UP
        </button>
      </form>
  
      <p className="conditions">By clicking on Sign up, you agree to Superapp <span>Terms and Conditions of Use</span></p>
      <p className="conditions">To learn more about how Superapp collects, uses, shares and protects your personal data, please head to Superapp <span>Privacy Policy</span></p>
    </div>
  </div>  
  )
}

export default Home
