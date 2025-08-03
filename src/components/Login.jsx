import React, { useContext } from "react";
import NavBar from "./NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";

const Login = () => {
  const { signWithGoogle } = useContext(AuthContext);
  const { signInUser } = useContext(AuthContext);

  const location = useLocation()
  console.log(location);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((Result) => {
        console.log(Result.user);
        navigate(location?.state ? location.state : "/")
      })
      .catch((error) => console.error(error));
  };

  const handleLogin = () => {
    signWithGoogle()
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };
  return (
    <div className="min-h-screen">
      <NavBar></NavBar>
      {/* form start */}
      <div className="min-h-[calc(100vh-150px)] flex flex-col gap-8 items-center justify-center">
        <div className="card w-full max-w-sm shrink-0 shadow-2xl ">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                name="password"
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
          <p className="text-center">
            Don't have an account please{" "}
            <Link className="font-bold text-blue-600" to="/register">
              register
            </Link>
          </p>
        </div>
        <button onClick={handleLogin} className="btn bth-wide text-center">
          Log in with google
        </button>
      </div>
      {/* form end */}
    </div>
  );
};

export default Login;
