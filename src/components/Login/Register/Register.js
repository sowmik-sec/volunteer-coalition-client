import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const { user, register, updateUserProfile } = useContext(AuthContext);
  const formRef = useRef(null);

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(email, password);
    register(email, password)
      .then((result) => {
        const user = result.user;

        handleUpdateUser(firstName, lastName, photoURL);
        formRef.current.reset();
      })
      .catch((error) => console.error(error));
  };
  const handleUpdateUser = (firstName, lastName, photoURL) => {
    const profile = {
      displayName: `${firstName} ${lastName}`,
      photoURL,
    };
    updateUserProfile(profile)
      .then(() => console.log("profile updated"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <h3 className="text-3xl my-6">
            Welcome to our volunteer network! We're thrilled that you're
            considering joining us in our mission to make a positive impact in
            our community.
          </h3>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form ref={formRef} onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="First Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Last Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                onChange={(event) => setPhotoURL(event.target.value)}
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
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
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="password"
                className="input input-bordered"
              />
              <label className="">
                <span className="label-text-alt">Already have an account?</span>{" "}
                <Link to="login">
                  <span className="label-text-alt link link-hover">Log In</span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="text-center form-control mt-6">
              <button className="bg-green-400 btn border-0">
                <FcGoogle className="h-6 w-6 mr-6" />
                Register with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
