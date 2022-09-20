import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {
  return (
    <div>
<div class="container margin-top">

        
  <h2>Sign-in</h2>
  <form action="/" method="get" class="was-validated">
    <div class="form-group">
        <label for="emp">Email or mobile phone number</label>
        <input type="emp" class="form-control" id="emp" name="emp" required/>
        <div class="form-group">
            <label for="pass">Password</label>
            <input type="pass" class="form-control" id="pass" name="pass" required/>
          </div>

          <div class="form-group form-check">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name="remember" /> Remember me
            </label><br/>
            By continuing, you agree to LOGO Craft's<br/> 
            Conditions of Use and Privacy Notice.
          </div>

    <button type="submit" class="btn btn-warning">Sign in</button>&nbsp;&nbsp;<button class="btn btn-warning" type = "reset" value = "Reset" >Reset</button>
    <div class="space"></div><br/>
    </div>
  </form>

  <form action='/registration'> 
    <div class="form-group">
        <button type="submit" class="btn btn-light">
            Create your LOGO Craft account</button>
    </div>
    </form>
</div>
    </div>
    
    
  )
}

export default Login