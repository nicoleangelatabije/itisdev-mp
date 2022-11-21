import React, {useState} from "react";
import Link from "next/link";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Dropdown from "../../components/Dropdown";
import ToggleSwitch from "../../components/ToggleSwitch";
import BasicButton from "../../components/BasicButton";

function AddVehicle() {
  	const [isDisabled, setIsDisabled] = useState(false);
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
        {/* First Field Group */}
        <div className="form-container">
          <div className="form-item">
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
          <div class="form-item">
            <label className="form-labels">
              Vehicle Type: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-fields"
              placeholder="Select Vehicle Type"
            />
          </div>
          <div class="form-item form-toggle">
            {" "}
            Status:
            <br />
            <ToggleSwitch
              disabled={isDisabled}
              setDisabled={setIsDisabled}
            ></ToggleSwitch>
          </div>
        </div>

        {/* Second Field Group */}
        <br />
        <div className="form-container">
          <div className="form-item">
            <label className="form-labels">
              Brand: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input className="form-fields" placeholder="Select Brand" />
          </div>

          <div className="form-item">
            <label className="form-labels">
              Manufacturing Year: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-fields"
              placeholder="Enter Manufacturing Year"
            />
          </div>

          <div className="form-item">
            <label className="form-labels">
              Transmission Type: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-fields"
              placeholder="Select Transmission Type"
            />
          </div>
        </div>

        <br />
        <hr />
        {/* Third Field Row */}

        <div className="form-container">
          <div className="form-item">
            <label className="form-labels">
              Engine Number: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-fields"
              placeholder="Enter Engine Number"
            />
          </div>

          <div className="form-item">
            <label className="form-labels">
              Engine Type: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-fields"
              placeholder="Select Engine Type"
            />
          </div>

          <div className="form-item">
            <label className="form-labels">
              Chassis: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-fields"
              placeholder="Select Chassis"
            />
          </div>
        </div>

        <br />

        <div className="form-container">
          <div className="form-item">
            <label className="form-labels">
              Insurance Amount: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-fields"
              placeholder="Enter Inusrance Amount"
            />
          </div>

          <div className="form-item">
            <label className="form-labels">
              Insurance Expiry Date: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input
              type="date"
              className="form-fields"
              placeholder="Enter Insurance Expiry Date"
            />
          </div>

          <div className="form-item">
            <label className="form-labels">
              GPS Provider Name: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-fields"
              placeholder="Select GPS Provider Name"
            />
          </div>
        </div>
        <br />
        <hr />
        <div className="form-container">
          <div className="form-item">
            <label className="form-labels">
              GPS Provider Name: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-fields"
              placeholder="Select GPS Provider Name"
            />
          </div>

          <div className="form-item">
            <label className="form-labels">
              Fuel Level Sensor Name: <label className="required"> * </label>{" "}
            </label>{" "}
            <br />
            <input
              type="text"
              className="form-fields"
              placeholder="Select Fuel Level Sensor Name"
            />
          </div>

          <br />
        </div>
        <div className="form-container">
          <span className="form-item-buttons">
            <BasicButton
              label={"Cancel"}
              color={"gray"}
              type={"reset"}
            ></BasicButton>
            <BasicButton
              label={"Save"}
              color={"green"}
              type={"button"}
            ></BasicButton>
          </span>
        </div>
      </div>
    </>
  );
}

export default AddVehicle;
