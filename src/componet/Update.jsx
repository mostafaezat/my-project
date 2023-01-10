import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Update(props) {
    let navigate = useNavigate();
  const [Categorydata, SetCategorydata] = useState({
    id:"",
    name: "",
  });
  const HandleInput = (event) => {
    const Userobject = { ...Categorydata };
    Userobject[event.target.name] = event.target.value;
    SetCategorydata(Userobject);
    console.log(Categorydata)
  };
  let onsubmithadle = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .put("https://python6.itraxacademy.com/public/api/category/update",Categorydata ,{
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
          <label htmlFor="exampleInputName">Category id</label>
          <input
            name="id"
            type="text"
            className="form-control"
            placeholder="Category id"
            onChange={HandleInput}
          />
          <button type="submit" className="btn btn-info my-2">
           update
          </button>
        </div>
      </form>
    </>
  );
}
