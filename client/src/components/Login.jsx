import React from 'react'

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
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            //   value={email}
            //   onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter name"
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
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login