import React, { PureComponent } from "react";
import tick from "../../tick.PNG";
import Form from "../homepage/Form";

export default class EndToEndFoodBusiness extends PureComponent {
  render() {
    return (
      <div
        style={{
          background: "#111B2B",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: "600",
            textAlign: "center",
            marginTop: "12rem",
          }}
        >
          <br />
          An End-To-End Food Business Software Solution Provider
        </div>
        <h2
          className="nunito text-center blueboxHeading"
          style={{ padding: "10px 0 20px" }}
        >
          You've Never Managed Your Food Business
          <br /> Like This Before
        </h2>
        <div className="justify-content-center">
          <div class="form-banner">
            <Form
              dataAccount={"3161173:g2o5g2c3i8"}
              dataForm={"4175542:d4z0s3"}
            />
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-center mt-4 mb-4">
            <div class="col-md-3 col-xs-10 p-4">
              <img alt="icon" src={tick} style={{ width: "50px" }} />{" "}
              <h6 style={{ display: "inline" }}>Recipe & Menu Engineering</h6>
              <br />
            </div>
            <div class="col-md-3 col-xs-10 p-4">
              <img alt="icon" src={tick} style={{ width: "50px" }} />{" "}
              <h6 style={{ display: "inline" }}> Manufacturing Technology</h6>
              <br />
            </div>
            <div class="col-md-3 col-xs-10 p-4">
              <img alt="icon" src={tick} style={{ width: "50px" }} />{" "}
              <h6 style={{ display: "inline" }}>Sales & Marketing Platform</h6>
              <br />
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-3 col-xs-10 p-4">
              <img alt="icon" src={tick} style={{ width: "50px" }} />{" "}
              <h6 style={{ display: "inline" }}>
                Delivery & Packaging Integrations
              </h6>
              <br />
            </div>
            <div class="col-md-3 col-xs-10 p-4">
              <img alt="icon" src={tick} style={{ width: "50px" }} />
              <h6 style={{ display: "inline" }}>Inventory Management</h6>
              <br />
            </div>
            <div class="col-md-3 col-xs-10 p-4">
              <img alt="icon" src={tick} style={{ width: "50px" }} />
              <h6 style={{ display: "inline" }}> Analytics</h6>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
