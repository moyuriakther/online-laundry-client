import React from "react";
import PageTitle from "../Common/PageTitle/PageTitle";
import ScrollArrow from "../Common/Scroll/ScrollArrow";

const Privacy = () => {
  return (
    <div className="container my-5">
      <PageTitle title={"privacy"} />
      <ScrollArrow />
      <h6 className="mt-5 about-page-subtitle">Home / Privacy</h6>
      <h3 className="privacy-title">Privacy Policy</h3>
      <p
        className="privacy-paragraph"
        style={{ fontFamily: "Archivo,sans-serif", color: "#717171" }}
      >
        This Privacy Policy describes your privacy rights concerning our use,
        storage, collection, sharing, and protection of your personal
        information. It refers to the Online Laundry website, and all related
        domains, sub-domain, services, and tools. <br /> <br /> Your sign up
        for, access, or use our services, content, features, technologies, or
        functions offered on our website and all related sites, applications,
        and services consider as agree with this Privacy Policy. <br /> <br />{" "}
        How do we collect information about you? <br /> <br /> When you sign up
        for service through the Online Laundry website, you are suggested to
        provide contact information including your address and phone number.
        This information is gathered so that we can correctly perform pick-up
        and drop-off services and so that we can talk with you about your
        laundry services.
        <br /> <br /> Throughout this policy, we use the term “personal
        information” to describe information that can be associated with a
        specific person and can be used to identify that person. <br /> <br />{" "}
        How you can contact us about privacy questions? <br />
        <br /> If you have questions or concerns regarding this policy, you
        should contact us by email.
      </p>
    </div>
  );
};

export default Privacy;
