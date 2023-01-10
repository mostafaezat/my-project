import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatCategory() {
    let navigate = useNavigate();
  const [Categorydata, SetCategorydata] = useState({
    name: "",
  });
  const HandleInput = (event) => {
    const Userobject = { ...Categorydata };
    Userobject[event.target.name] = event.target.value;
    SetCategorydata(Userobject);
  };
  let onsubmithadle = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post("https://python6.itraxacademy.com/public/api/category",Categorydata ,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }).then(()=>navigate("/Category"))
  };
  return (
    <>
      <form onSubmit={onsubmithadle}>
        <div className="form-group w-25 m-auto">
          <label htmlFor="exampleInputName">Category Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputName"
            placeholder="Category Name"
            onChange={HandleInput}
          />
          <button type="submit" className="btn btn-success my-2">
            Save
          </button>
        </div>
      </form>
    </>
  );
}
