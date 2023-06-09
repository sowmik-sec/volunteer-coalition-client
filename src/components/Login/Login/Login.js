import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { login, googleSignUp } = useContext(AuthContext);
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        formRef.current.reset();
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((result) => {
        const user = result.user;
        console.log("google info", user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <h3 className="text-3xl my-6">
            Welcome to our volunteer network! We're thrilled that you're
            considering joining us in our mission to make a positive impact in
            our community.
          </h3>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form ref={formRef} onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="">
                <span className="label-text-alt">
                  New to Volunteer Coalition?
                </span>{" "}
                <Link to="/register-here">
                  <span className="label-text-alt link link-hover">
                    Register
                  </span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="text-center form-control mt-6">
              <button
                onClick={handleGoogleSignUp}
                className="bg-green-400 btn border-0"
              >
                <FcGoogle className="h-6 w-6 mr-6" />
                Log in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
