import { useState } from 'react'


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
    if (!data.Consent) error.Consent = "Field is required";

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
    <div style={{width:"40vw", marginLeft:"auto", marginRight:"auto"}} >
      <h1>Super App</h1>
      <h5>Create your new account</h5>
      <form 
        onSubmit={handleSubmit}
        style={{display:"flex", flexDirection: "column", gap:"15px"}}
      >
        <input 
          type='text'
          name="Name"
          value={data.Name}
          onChange={handleInput}
          placeholder='Name'
        />
        <span style={{color:"red", height:"10px"}}>{errors.Name}</span>
        <input 
          type='text'
          name="UserName"
          value={data.UserName}
          onChange={handleInput}
          placeholder='UserName'
        />
        <span style={{color:"red", height:"10px"}}>{errors.UserName}</span>
        <input 
          type='email'
          name="Email"
          value={data.Email}
          onChange={handleInput}
          placeholder='Email'
        />
        <span style={{color:"red", height:"10px"}}>{errors.Email}</span>
        <input 
          type='tel'
          name="Mobile"
          value={data.Mobile}
          onChange={handleInput}
          placeholder='Mobile'
        />
        <span style={{color:"red", height:"10px"}}>{errors.Mobile}</span>
        <div>
        <input 
          type='checkbox'
          name="Consent"
          value={data.Consent}
          onChange={handleInput}
        />
        <label htmlFor='Consent'>Share my registration data with Superapp</label>
        </div>
        <span style={{color:"red", height:"10px"}}>{errors.Consent}</span>
        <button>
          SIGN UP
        </button>
      </form>

      <h6>By clicking on Sign up. you agree to Superapp Terms and Conditions of Use</h6>
      <h6>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp Privacy Policy</h6>
    </div>
  )
}

export default Home
