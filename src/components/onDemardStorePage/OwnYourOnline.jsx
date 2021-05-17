import React, { PureComponent } from "react";
import "../../style.css";
export default class OwnYourOnline extends PureComponent {
  render() {
    return (
      <>
        <div class="container" style={{ marginTop: "8rem" }}>
          <div class="row justify-content-between">
            <div class="col-6">
              <img
                src="https://www.dailykit.org/hubfs/dailykit-assets/Real-TimeOrderTracking@2x.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="col-6">
              <h2
                style={{
                  fontWeight: "bolder",
                  fontSize: "65px",
                  margin: "2rem 0rem 2rem 0rem",
                }}
                className="nunito"
              >
                Own Your Online Store Completely
              </h2>
              <p
                style={{
                  fontSize: "18px",
                }}
              >
                <div class="vl"></div>
                <div style={{ display: "inline" }}>
                  In the modern digital world, owning your web presence is a
                  MUST.
                </div>
                <div
                  class="row"
                  style={{ marginTop: "2rem", marginLeft: "2rem" }}
                >
                  <ul class="col-6 onDemandCategories">
                    <li>Your Own Domain</li>
                    <li>iOS & Android Apps</li>
                  </ul>
                  <ul class="col-6 onDemandCategories">
                    <li>Themes & Brand Colors</li>
                    <li>Custom Brand Pages</li>
                  </ul>
                </div>{" "}
                <button
                  type="button"
                  style={{ fontSize: "14px", width: "150px" }}
                  class="btn btn-dark btn-lg p-3 pl-4 pr-4"
                >
                  TELL ME MORE
                </button>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}