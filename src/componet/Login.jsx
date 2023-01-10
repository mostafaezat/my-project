import axios from "axios";
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [User, SetUser] = useState({
    email: "",
    password: "",
  });
  const HandleInput = (event) => {
    const Userobject = { ...User };
    Userobject[event.target.name] = event.target.value;
    SetUser(Userobject);
  };
  let navigate = useNavigate();
  let onsubmithadle = (e) => {
    e.preventDefault();
    axios.post("https://python6.itraxacademy.com/public/api/login",User).then((r) => {
      let token = r.data.token
      localStorage.setItem('token',token)
      navigate("/");
    });
      console.log(User);
  };
  return (
    <>
      <div className="container my-5 w-50">
        <form onSubmit={onsubmithadle}>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
