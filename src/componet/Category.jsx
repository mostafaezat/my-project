import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Category(props) {
  let navigate = useNavigate();
  const [tabledata, setTabledata] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/Login");
    }
  });
  useEffect(() => {
    catchTable();
  }, []);

  function catchTable() {
    const token = localStorage.getItem("token");
    axios
      .get("https://python6.itraxacademy.com/public/api/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => {
        setTabledata(r.data.data);
      });
  }
  function deleteItem(id) {
    const token = localStorage.getItem("token");
    axios
      .delete(
        `https://python6.itraxacademy.com/public/api/category/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((r) => {
        console.log(r);
        catchTable();
      });
  }
  function updateItem(id) {
    console.log(id);
  }

  return (
    <>
      <button className="btn btn-primary my-5 container-fluid ">
        <Link className="nav-item nav-link" to="/CreatCategory">
          ADD NEW Category
        </Link>
      </button>
      <table className="table table-dark container ">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Delete</th>
            <th scope="col">update</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <td>{item.name}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteItem(item.id)}
                >
                  delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateItem(item.id)}
                >
                  <Link className="nav-item nav-link" to="/Update">
                    update
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
