import axios from "axios";
import React, { useState } from "react";

export default function Register() {
  const [User, SetUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const HandleInput = (event) => {
    const Userobject = { ...User };
    Userobject[event.target.name] = event.target.value;
    SetUser(Userobject);
  };
  let onsubmithadle = (e) => {
    e.preventDefault();
    axios.post("https://python6.itraxacademy.com/public/api/register",User).then((r) => {
      console.log(r);
    });
  };

  return (
    <>
      <div className="container my-5 w-50">
        <form onSubmit={onsubmithadle}>
          <div className="form-group">
            <label htmlFor="exampleInputName">User Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter first Name"
              onChange={HandleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              onChange={HandleInput}
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={HandleInput}
            />
          </div>
          <button type="submit" className="btn btn-success my-2">
            Save
          </button>
          <button type="reset" className="btn btn-primary mx-4">
            Reset
          </button>
        </form>
      </div>
    </>
  );
}
