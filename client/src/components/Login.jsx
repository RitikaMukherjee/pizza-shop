import React from 'react'
import {NavLink} from 'react-router-dom'
function Login() {
  return (
    <>
        <div>
      <h1 className="text-center mt-4">Log in</h1>

      <div className="container">
        <form method="POST">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            //   value={email}
            //   onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter email"
            />
            
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            //   value={password}
            //   onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <div className="text-center">
            <button type="submit" class="btn btn-secondary  m-4" >
              Login
            </button>
            <NavLink to="/signup">
            <button type="submit" class="btn btn-secondary  m-4" >
              Don't have any account? Signup
            </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login