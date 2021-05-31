import React, { PureComponent } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import "../style.css";
import ScheduleMeetingSection1 from "../components/shared/ScheduleMeetingSection1";
import Makethejuice from "../components/weservepage/Makethejuice";
import Weserve from "../components/weservepage/Weserve";
import OptimizeKitchen from "../components/weservepage/OptimizeKitchen";
import AnERP from "../components/weservepage/AnERP";
import BannerSection10 from "../components/shared/BannerSection10";
export default class Weservepage extends PureComponent {
  render() {
    return (
      <div style={{ marginTop: "12rem" }}>
        <Navbar />
        <Makethejuice
          subheading={"One-Stop Shop"}
          heading={"Make The Juice Worth The Squeeze"}
          image={
            "https://www.dailykit.org/hubfs/dailykit-assets/Lob-hero@2x.png"
          }
          button1text={"Schedule A Call"}
          button2text={"Learn More"}
          button1link={"#scheduledemo"}
          button2link={"/"}
          smallimage={
            "https://www.dailykit.org/hubfs/osaas/images/icons/chat-icon.png"
          }
          smallheading={"Minimum Added Revenue"}
          smallsubheading={"$100000"}
          para={
            "Blend Best Business Practices To Help Your Food Business Maximize Sustainability & Growth"
          }
        />
        <Weserve />
        <OptimizeKitchen />
        <BannerSection10
          subheading={"For Supermarkets"}
          heading={"Meet Rapidly Evolving Consumer Needs With Ease"}
          leftImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/supermarket@2x.png"
          }
          para={
            "Online Grocery Sales Hit A Record $7.2 BN in 2020 & That Is Just Scratching The Surface."
          }
          list1={["Grow Top-Line Revenue", "Mulitply Brand Awareness"]}
          list2={[
            "Increase Bottom-Line Profits",

            "Mitigate Risk & Achieve Sustainability",
          ]}
          id="supermarkets"
          button1link={"#scheduledemo"}
        />
        <BannerSection10
          subheading={"For Cloud Kitchens"}
          heading={"Built For Cloud Kitchen Operations"}
          rightImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/Cloudkitchen@2x.png"
          }
          para={
            "Cloud Kitchens rely heavily on technology to help run their brands. DailyKIT’s ability to take any kitchen to cloud will help bring life into your Ghost Kitchen brands."
          }
          list1={["Incorporate Trending Sales Channels", "Optimize Operations"]}
          list2={["Multiple Brands - One Solution", "Built for The Future"]}
          id="restaurants"
          button1link={"#scheduledemo"}
        />
        <AnERP
          heading={"An ERP for Large Enterprises"}
          rightImage={
            "https://www.dailykit.org/hubfs/dailykit-assets/enterprise-solution@2x.png"
          }
          para={
            "Easily address the complexities of large food manufacturers and distributors while dealing with high transaction volumes and multiple locations."
          }
          button1text={"Schedule A Meeting"}
          button1link={"#scheduledemo"}
        />

        <ScheduleMeetingSection1
          heading={"Schedule an E-Meeting"}
          image={
            "https://static.hsappstatic.net/ui-images/static-2.377/optimized/errors/map.svg"
          }
          id={"scheduledemo"}
          content={[
            {
              question: "How Do You Schedule A Meeting?",
              answer:
                "Select the date on the calendar, the time slot, and then simply fill in your information. Done!",
            },
            {
              question: "What Happens After You Schedule A Meeting?",
              answer:
                "We will send you a calendar invite to your supplied email address with the Google Meet link at the scheduled date & time.In the event that you're unable to join by laptop/computer, we will call you on the given phone number",
            },
            {
              question: "What Happens During The Meeting?",
              answer:
                "We invite you to share good, bad and the ugly of your business. After understanding your requirements and concerns, we will figure out how to deploy the proper DailyKIT tech solutions based on your business strategy.",
            },
          ]}
        />
        <Footer />
      </div>
    );
  }
}
