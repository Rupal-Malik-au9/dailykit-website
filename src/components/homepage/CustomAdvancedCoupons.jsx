import React, { PureComponent } from "react";
import "../../style.css";
export default class CustomAdvancedCoupons extends PureComponent {
  render() {
    return (
      <div class="container">
        <div
          class="row justify-content-center"
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            marginBottom: "10rem",
            marginTop: "10rem",
          }}
        >
          <div class="col-4">
            <ul class="onDemandCategories">
              <li>Custom Advanced Coupons</li>
              <li>Coupon-based Cashback</li>
              <li>Coupon-based Loyalty Points</li>
            </ul>
          </div>
          <div class="col-4">
            <ul class="onDemandCategories">
              <li>Signup Offer Campaigns</li>
              <li>Referral Marketing Campaigns</li>
              <li>Post-Order Loyalty Points</li>
              <li>Wallet Cashback</li>
            </ul>
          </div>
          <div class="col-4">
            <ul class="onDemandCategories">
              <li>Automated Social Media Collateral (Coming Soon)</li>
              <li>Automated Recipe Cards</li>
              <li>SEO-Friendly Product Pages</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
