import React from "react";
import { Link } from "react-router-dom";

export default function PageA() {
  const today: Date = new Date();
  console.log(today);
  const year = today.getFullYear().toString();
  const month = today.getMonth().toString();
  const day = today.getDay().toString();
  const date = today.getDate().toString();
  //today.getHours()
  //today.getMinutes()
  //today.getSeconds()
  console.log(year + "/" + month + "/" + date + "/" + day);
  return (
    <div>
      <h1>PageA</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
