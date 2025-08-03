import React, { useContext } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { Result } from "postcss";

const Register = () => {
  const {createAnUser} = useContext(AuthContext)

  const handleSubmit = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirmPassword.value;
    console.log(email,password,confirm_password)

    if(password !== confirm_password){
      return alert("your password didn't matched")
    }

    createAnUser(email,password)
    .then(Result => console.log(Result.user))
    .catch(error=> console.error(error))

  }
  return (
    <div className="min-h-screen">
      <NavBar></NavBar>
      {/* form start */}
      <div className="min-h-[calc(100vh-150px)] flex items-center justify-center">
        <div className="card w-full max-w-sm shrink-0 shadow-2xl ">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="Name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center">
            Already have an account? please{" "}
            <Link className="font-bold text-blue-600" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
      {/* form end */}
    </div>
  );
};

export default Register;
