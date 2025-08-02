import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="min-h-screen">
        <NavBar></NavBar>
        {/* form start */}
        <div className="min-h-[calc(100vh-150px)] flex items-center justify-center">
          <div className="card w-full max-w-sm shrink-0 shadow-2xl ">
            <form className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='text-center'>Don't have an account please <Link className='font-bold text-blue-600' to="/register">register</Link></p>
          </div>
        </div>
        {/* form end */}
      </div>
    );
};

export default Login;