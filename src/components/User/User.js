import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Header from "../Shared/Header/Header";
import { toast } from "react-hot-toast";

const User = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, updateUserProfile, resetPassword } = useContext(AuthContext);
  const [firstName, setFirstName] = useState(user?.displayName?.split(" ")[0]);
  const [lastName, setLastName] = useState(user?.displayName?.split(" ")[1]);
  const [photoURL, setPhotoURL] = useState(user?.photoURL);

  const formRef = useRef(null);

  const handleUpdate = (event) => {
    event.preventDefault();
    handleUpdateUser(firstName, lastName, photoURL);
  };

  const handleUpdateUser = (firstName, lastName, photoURL) => {
    const profile = {
      displayName: `${firstName} ${lastName}`,
      photoURL,
    };
    updateUserProfile(profile)
      .then(() => {
        console.log("user updated");
        console.log(user);
      })
      .catch((err) => console.log(err));
  };
  const handleResetPassword = () => {
    resetPassword(user?.email)
      .then(() => {
        toast("Password reset email sent");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <Header />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-center md:w-[800px]">
            <img
              src={user?.photoURL}
              className="w-[350px] h-[350px] mx-auto rounded-lg"
              alt="user"
            />
            <h1 className="text-3xl">{user?.displayName}</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form ref={formRef} onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  onChange={(event) => setFirstName(event.target.value)}
                  defaultValue={user?.displayName?.split(" ")[0]}
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
                  defaultValue={user?.displayName?.split(" ")[1]}
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
                  defaultValue={user?.photoURL}
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
                  readOnly
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Update Profile
                </button>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleResetPassword} className="btn">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
