import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Dropdown from "../../components/Dropdown";
import BasicTable from "../../components/BasicTable"

function Vehicles() {
	return (
    <>
      <Header
        page={"VEHICLES"}
        subPage={"HOME"}
        user={"Example N. Name"}
      ></Header>
      <NavBar></NavBar>
      <div id="main-container">
        <div className="user-main-container">
          <div className="main-container-bg">
            <div className="user-left-container">
              <input
                type="search"
                id="user"
                className="search-bar"
                placeholder="Search"
              ></input>

              <span className="sort-container">
                <select className="sort-dropdown">
                  <option value="" disabled selected hidden>
                    SORT BY
                  </option>
                  <option value="Plate # Ending (Ascending)">
                    Plate # Ending (Ascending)
                  </option>

                  <option value="Plate # Ending (Descending)">
                    Plate # Ending (Descending)
                  </option>

                  <option value="Insurance Expiry (Ascending)">
                    Insurance Expiry (Ascending)
                  </option>

                  <option value="Insurance Expiry (Descending)">
                    Insurance Expiry (Descending)
                  </option>
                </select>
              </span>
              <span className="user-right-container">
                <button className="add-button">
                  {" "}
                  <Link href="vehicle/addvehicle">Add Vehicle + </Link>
                </button>
              </span>
            </div>
			<br/>
			<BasicTable> </BasicTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vehicles;
