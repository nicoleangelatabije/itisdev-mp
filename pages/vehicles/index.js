import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Dropdown from "../../components/Dropdown";
import BasicTable from "../../components/BasicTable"
import GlobalFilter from "../../components/GlobalFilter";
import {useGlobalFilter} from 'react-table';
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
              <span className="sort-container">
              </span>
            <BasicTable> </BasicTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vehicles;
