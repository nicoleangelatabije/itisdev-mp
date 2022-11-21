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
      <br />
      <div id="main-container">
        <div id="form-container">
          <div class="grid-item">
            <label className="form-labels">
              Plate Number: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-fields"
              placeholder="Enter Plate Number"
            />
          </div>

          <div class="grid-item ">
            <label className="form-labels">
              Plate Number: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-fields"
              placeholder="Enter Plate Number"
            />
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default AddVehicle;
