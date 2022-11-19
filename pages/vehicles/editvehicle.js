import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Dropdown from "../../components/Dropdown";

function AddVehicle() {
  return (
    <>
      <Header
        page={"VEHICLES"}
        subPage={"ADD VEHICLE"}
        user={"Example N. Name"}
      ></Header>
      <NavBar></NavBar>
      <div id="main-container">
        <p> Add vehicle </p>
      </div>
    </>
  );
}

export default AddVehicle;
