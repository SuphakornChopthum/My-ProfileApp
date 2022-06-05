import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="Physice"
          where="Naresuan University"
          from="2015"
          to="Present"
        >
          {" "}
        </Widecard>
        <Widecard
          title="Mathemtics-Science Program "
          where="SungmanChanupatham High School"
          from="2010"
          to="2015"
        >
          {" "}
        </Widecard>
      </div>
    );
  }
}
export default Education;
