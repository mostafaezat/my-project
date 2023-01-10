import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/Login");
    }
  });

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
