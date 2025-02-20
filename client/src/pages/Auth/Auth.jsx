import React from 'react'
import "./Auth.css"
import Squirrel from "../../assets/images/l-s-squirrel.png"
import standingSquirrel from "../../assets/images/w-squirrel.png"
import {useState} from "react"

const Auth = () => {
  const [isSignUp, setIsSignup] = useState(false)

  //confirm password state
  const [confirmPass, setConfirmPass] = useState(true)

  const emptyDetails = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: ""
  }

  const [data, setData] = useState(emptyDetails)
  
  const handleSwitcher = () => {
    if (isSignUp === true) {
      setIsSignup(false)
      setData(emptyDetails)
    }else{
      setIsSignup(true)
      setData(emptyDetails)
    }
  }

    //function for handling submission
    const handleSubmit = (e) => {
      e.preventDefault();

      if (isSignUp) {
         data.password === data.confirmpassword ? console.log("signup")
         : setConfirmPass(false)
      }else{
          console.log("login");
      }
  }

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return (
    <div className="auth">
     <div className="blur1"></div>
     <div className="blur2"></div>
      <span className="authLogo pacifico-regular">Diss Pit</span>
        <img className="authLeft" src={Squirrel} alt="" />
        <div className="authRight">
        <form className='infoForm'>
                <h3 className="header pacifico-regular" >
                  {isSignUp? "Sign Up" : "Log In"}
                </h3>
                <div  className="info">
                {isSignUp? (
                    <div>
                      <input type="text" 
                        placeholder='First Name' 
                        className='infoInput' name='firstname'
                        onChange={handleChange}
                        value={data.firstname}
                      />

                      <input type="text" 
                      placeholder='Last Name' 
                      className='infoInput' name='lastname' 
                      onChange={handleChange} 
                      value={data.lastname}
                      />
                    </div>
                  ) : ""}
                  <div>
                    <input type="text" 
                      placeholder='Email' 
                      className='infoInput' name='email'
                      onChange={handleChange} 
                      value={data.email}
                    />
                  </div>

                  <div>
                      <input type="password" 
                      placeholder='Password' 
                      className='infoInput' name='password'
                      onChange={handleChange}  
                      value={data.password}
                      />

                      {isSignUp? (
                        <div>
                          <input type="password"
                            placeholder='Confirm Password' 
                            className='infoInput' name='confirmpassword' 
                            onChange={handleChange} 
                            value={data.confirmpassword}
                          />
                        </div>
                      ) : ""}
                  </div>
                </div>
                  <div className="switcher pacifico-regular">
                      <span onClick={handleSwitcher}>
                          {isSignUp? "Already have an account? Login!": "Don`t have an account? SignUp!" }
                      </span>
                  </div>
                <button className="button" onClick={handleSubmit}>
                    {isSignUp? "Sign Up": "Log In"}
                </button>
            </form>
        </div>
        <img className="standingSquirrel" src={standingSquirrel} alt="" />
    </div>
  )
}

export default Auth