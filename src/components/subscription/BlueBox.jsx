import React, { PureComponent } from "react";
import Delievery from "../../assets/Delievery.PNG";
import plans from "../../assets/custom_plans.PNG";
import map from "../../assets/map.PNG";
import planner from "../../assets/planner.PNG";
import autocard from "../../assets/autocard.PNG";
import dynamic from "../../assets/dynamicdelivery.PNG";
export default class BlueBox extends PureComponent {
  render() {
    return (
      <div>
        <div
          style={{
            background: "#101B2A",
            color: "white",
            marginTop: "6rem",
          }}
        >
          <div style={{ color: "#111B2B" }}>.</div>
          <div className="nunito text-center blueboxHeading">
            Don't Just Manage, Own it.
          </div>
          <div
            class="container"
            style={{
              textAlign: "left",
              marginTop: "1.5rem",
              padding: "2rem 0rem 6rem 0rem",
            }}
          >
            <div class="row justify-content-evenly mb-4">
              <div class="col-md-3 col-xs-10 column3 justify-content-center">
                <h5
                  style={{
                    display: "inline",
                    fontWeight: "bolder",
                    textAlign: "center",
                  }}
                  class="nunito"
                >
                  Create Custom Plans & Options
                </h5>
                <br />
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "2rem",
                    textAlign: "center",
                  }}
                >
                  Multiple Plans like Vegan or Seafood | Couple or family | 2 or
                  3 items. It's upto you.
                </p>
                <img
                  alt="icon"
                  src={plans}
                  style={{
                    width: "90px",
                    display: "block",
                    margin: "2rem 40% 2rem 30%",
                  }}
                />
              </div>
              <div class="col-md-3 col-xs-10 column3 justify-content-center">
                <h5
                  style={{
                    display: "inline",
                    fontWeight: "bolder",
                  }}
                  class="nunito"
                >
                  Set Weekly Start and Cutoff Time
                </h5>
                <br />
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "2rem",
                    textAlign: "center",
                  }}
                >
                  Select the number of days and the time
                </p>
                <img
                  alt="icon"
                  src={planner}
                  style={{
                    width: "90px",
                    display: "block",
                    margin: "2rem 40% 2rem 30%",
                  }}
                />
              </div>
              <div class="col-md-3 col-xs-10 column3 justify-content-center">
                {" "}
                <h5
                  style={{
                    display: "inline",
                    fontWeight: "bolder",
                  }}
                  class="nunito"
                >
                  Auto-Card Debit At Cut Off Time
                </h5>
                <br />
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "2rem",
                    textAlign: "center",
                  }}
                >
                  Saved Card is automatically debited and order is placed after
                  cutoff time
                </p>
                <img
                  alt="icon"
                  src={autocard}
                  style={{
                    width: "90px",
                    display: "block",
                    margin: "2rem 40% 2rem 30%",
                  }}
                />
              </div>

              <div class="row justify-content-evenly mt-4">
                <div class="col-md-3 col-xs-10 column3 justify-content-center">
                  {" "}
                  <h5
                    style={{
                      display: "inline",
                      fontWeight: "bolder",
                      textAlign: "center",
                    }}
                    class="nunito"
                  >
                    Precision Zip-Code Based Geo-Fencing
                  </h5>
                  <br />
                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "2rem",
                      textAlign: "center",
                    }}
                  >
                    Configure Deliverable zipcodes for each subscription plan.
                  </p>
                  <img
                    alt="icon"
                    src={map}
                    style={{
                      width: "90px",
                      display: "block",
                      margin: "2rem 40% 1.5rem 30%",
                    }}
                  />
                </div>
                <div class="col-md-3 col-xs-10 column3 justify-content-center">
                  <h5
                    style={{
                      display: "inline",
                      fontWeight: "bolder",
                      textAlign: "center",
                    }}
                    class="nunito"
                  >
                    Dynamic Delivery Price
                  </h5>
                  <br />
                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "2rem",
                      textAlign: "center",
                    }}
                  >
                    Offer Free Delivery or Configure price as per each zipcode.
                  </p>
                  <img
                    alt="icon"
                    src={dynamic}
                    style={{
                      width: "120px",
                      display: "block",
                      margin: "2rem 40% 2rem 30%",
                    }}
                  />
                </div>
                <div class="col-md-3 col-xs-10 column3 justify-content-center">
                  <h5
                    style={{
                      display: "inline",
                      fontWeight: "bolder",
                      textAlign: "center",
                    }}
                    class="nunito"
                  >
                    Configure Delivery Days
                  </h5>
                  <br />
                  <p
                    style={{
                      fontSize: "14px",
                      marginTop: "2rem",
                      textAlign: "center",
                    }}
                  >
                    Control Selection of Delivery Week-Days as per zipcode and
                    subscription plan.
                  </p>
                  <img
                    alt="icon"
                    src={Delievery}
                    style={{
                      width: "90px",
                      display: "block",
                      margin: "2rem 40% 2rem 30%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#111b2b",
              color: "white",
            }}
          >
            <div
              class="container"
              style={{
                textAlign: "left",
                padding: "1rem 0rem 6rem 0rem",
              }}
            >
              <div class="row justify-content-evenly">
                <div class="col-md-5 col-xs-10 column3">
                  <img
                    alt="icon"
                    src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Margins.svg"
                    style={{ width: "20px", marginRight: "0.8rem" }}
                  />{" "}
                  <h5 style={{ display: "inline" }}>
                    Add Permanent Items to Plans
                  </h5>
                  <br />
                  <p style={{ fontSize: "14px", marginTop: "0.8rem" }}>
                    Common & Most Sold Items could be added for each week
                  </p>
                </div>
                <div class="col-md-5 col-xs-10 column3">
                  <img
                    alt="icon"
                    src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Precise%20Configuration.svg"
                    style={{ width: "20px", marginRight: "0.8rem" }}
                  />{" "}
                  <h5 style={{ display: "inline" }}>
                    Add Items based on Each Week
                  </h5>
                  <br />
                  <p style={{ fontSize: "14px", marginTop: "0.8rem" }}>
                    Easily Add Your Rotating Items and Weekly Specials.
                  </p>
                </div>
                <div class="row justify-content-evenly mt-4">
                  <div class="col-md-5 col-xs-10 column3">
                    <img
                      alt="icon"
                      src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Smart%20Insights.svg"
                      style={{ width: "20px", marginRight: "0.8rem" }}
                    />{" "}
                    <h5 style={{ display: "inline" }}>
                      Bulk Actions for Ease of Use
                    </h5>
                    <br />
                    <p style={{ fontSize: "14px", marginTop: "0.8rem" }}>
                      Accurately Add Menu Items into multiple plans at once with
                      ease.
                    </p>
                  </div>
                  <div class="col-md-5 col-xs-10 column3">
                    <img
                      alt="icon"
                      src="https://www.dailykit.org/hubfs/dailykit-assets/sell-why%20choose%20us/Discounts%20%26%20Coupons.svg"
                      style={{ width: "20px", marginRight: "0.8rem" }}
                    />
                    <h5 style={{ display: "inline" }}>
                      Premium Products with Add-on Price
                    </h5>
                    <br />
                    <p style={{ fontSize: "14px", marginTop: "0.8rem" }}>
                      Configure selected products with an added price over plan
                      price.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
