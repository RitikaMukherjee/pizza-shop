import React from 'react'

function Signup() {
  return (
    <>
        <div>
      <h1 className="text-center mt-4">Sign Up</h1>

      <div className="container">
        <form method="POST">
          <div class="form-group">
            <label for="exampleInputName">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
            //   value={email}
            //   onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter name"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            //   value={email}
            //   onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter email"/>
          </div>
          <div class="form-group">
            <label for="exampleInputNumber">Mobile Number</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputNumber"
            //   value={email}
            //   onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter mobile number"/>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            //   value={password}
            //   onChange={(e)=>setPassword(e.target.value)}
              placeholder="Set a password"
            />
          </div>

          <div className="text-center">
            <button type="submit" class="btn btn-secondary  m-4" >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Signup