import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen">
      <NavBar></NavBar>
      {/* form start */}
      <div className="min-h-[calc(100vh-150px)] flex items-center justify-center">
        <div className="card w-full max-w-sm shrink-0 shadow-2xl ">
          <form className="card-body">
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
