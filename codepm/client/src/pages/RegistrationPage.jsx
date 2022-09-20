import React from 'react'
import { Link } from 'react-router-dom'
import './registration.css'

function RegistrationPage() {
  return (
    <div>
        <div class="container margin-top">
  <h2>Create Account</h2>
  <form action="/login" class="was-validated">
    <div class="form-group">
        <label for="fname">First Name</label>
        <input type="fname" class="form-control" id="fname" placeholder="First name" name="fname" required/>
      </div>
      <div class="form-group">
        <label for="fname">Last Name</label>
        <input type="lname" class="form-control" id="lname" placeholder="Last name" name="lname" required/>
      </div>
      <div class="form-group">
        <label for="mno">Mobile Number</label>
        <input type="mno" class="form-control" id="mno" placeholder="Mobile Number" name="mno" required/>
      </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required/>
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
    </div>
    <div class="form-group">
      <label for="pwd2">Confirm Password:</label>
      <input type="password" class="form-control" id="pwd2" placeholder="Enter Confirm password" name="pswd2" required/>
    </div>

    <div class="form-group form-check">
      <label class="form-check-label"/>
        <input class="form-check-input" type="checkbox" name="remember"/> Remember me
    </div>
    <button class="btn btn-warning">
        Continue</button>&nbsp;&nbsp;<button class="btn btn-warning" type = "reset" value = "Reset" >Reset</button> 
  </form>
</div>
    </div>
  )
}

export default RegistrationPage