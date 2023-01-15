import { useState } from 'react'
import './signup.css'
import data from '../../Data/signUpData.json'
const SignUp = props =>{

    const [signUpDetails , setSignUpDetails] = useState({
        email:'',
        mobile:'',
        password: '',
        confirmPassword:''
    })

    const submitSignUpDetails = (event)=>{
        event.preventDefault()
        // console.log(signUpDetails)
        // data.SignUpData.push(signUpDetails)
        // console.log(data)
        fetch('http://localhost:8080/',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: signUpDetails,
              mode: 'no-cors'
        }).then(res=>{
            console.log(res)
        }).catch(error=>{
            console.log(error)
        })
    }
    const setEmail = (event)=>{
        setSignUpDetails((prev)=>{
            return {
                ...prev,
                email:event.target.value
            }
        })
    }

    const setMobile = (event)=>{
        setSignUpDetails((prev)=>{
            return {
                ...prev,
                mobile:event.target.value
            }
        })
    }
    const setPassword = (event)=>{
        setSignUpDetails((prev)=>{
            return {
                ...prev,
                password:event.target.value
            }
        })
    }
    const setConfirmPassword = (event)=>{
        setSignUpDetails((prev)=>{
            return {
                ...prev,
                confirmPassword:event.target.value
            }
        })
    }

    return (
        <>
          <header>
    <h1>Sign Up</h1>
  </header>

    <form onSubmit={submitSignUpDetails}>
    <label for="email">Email:</label><br></br>
    <input value = {signUpDetails.email} type="email" id="email" name="email" onChange={setEmail}/><br></br>
    <label for="mobile">Mobile:</label><br></br>
    <input   value = {signUpDetails.mobile}type="tel" id="mobile" name="mobile" onChange={setMobile}/><br></br>
    <label   for="password">Password:</label><br></br>
    <input value = {signUpDetails.password}  type="password" id="password" name="password" onChange={setPassword}/><br></br>
    <label for="confirm-password">Confirm Password:</label><br></br>
    <input value = {signUpDetails.confirmPassword} type="password" id="confirm-password" name="confirm-password" onChange={setConfirmPassword}/><br></br>
    <input  type="submit" value="Submit"></input>
        </form>
        </>
    )
}

export default SignUp