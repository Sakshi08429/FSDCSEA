import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

function Login() {
   
    
      return (
        <div>
        <div>Login Form</div>
        <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
      </div>
      );
    }
    
   


export default Login
