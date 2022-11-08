import React from "react";
import PageTitle from "../Common/PageTitle/PageTitle";
import "./TermsConditions.css";

const TermsCondition = () => {
  return (
    <div className="container my-5">
      <PageTitle title={"terms & conditions"} />
      <h6 className="mt-5 about-page-subtitle">Home / Terms And Conditions</h6>
      <h3 className="privacy-title">Terms And Conditions</h3>
      <div className="container">
        <div className="stylet-list">
          <h2 className="title">1. Our contract with you</h2>
          <ul className="list">
            <li className="item">
              These Terms will apply to any Order we accept from you via the our
              website. Note that unless you accept these Terms, you should not
              be placing an Order.
            </li>
            <li className="item">
              We may change the Terms from time to time and it is the current
              version, which will apply to each Order when you place it. We will
              notify you of changes to the Terms by email.
            </li>
            <li className="item">
              Please read these Terms carefully and make sure that you
              understand them before placing an Order. The Terms restrict Our
              liability to you in certain circumstances. Please note any Orders
              with a value of less than 400 BDT will be charged an additional
              value 50 BDT.
            </li>
          </ul>
        </div>
        <div className="stylet-list">
          <h2 className="title">2. Definitions</h2>
          <ul className="list">
            <li className="item">App: Online Laundry Service is a website</li>
            <li className="item">
              Event Outside Our Control: any occurrence or circumstances over
              which we have no control as described in section 2 and including
              (without limitation) the unavailability of any Service Provider,
              key personnel or key materials without which We are unable to
              provide the Services;
            </li>
            <li className="item">
              Item: any garment or article collected from you in connection with
              an Order;
            </li>
            <li className="item">
              Services: personal dry cleaning or laundry services collected from
              and delivered to your nominated address;
            </li>
          </ul>
        </div>
        <div className="stylet-list">
          <h2 className="title">3. Placing an Order</h2>
          <ul className="list">
            <li className="item">
              Please ensure that you check the details of your Order before
              submitting it as We will not be liable to you for any errors you
              make. If you think that you may have made a mistake, please
              contact Us.
            </li>
            <li className="item">
              If for any reason We are unable fulfill your Order, We will let
              you know by email or text message.
            </li>
          </ul>
        </div>
        <div className="stylet-list">
          <h2 className="title">4. Collection and redelivery</h2>
          <ul className="list">
            <li className="item">
              We will use reasonable endeavors to collect and re-deliver Items
              at the times specified in the Order but we cannot guarantee to do
              so. We will use reasonable endeavors to communicate any delay to
              you by phone or email.
            </li>
            <li className="item">
              If you are not available to accept redelivery of Items, we will
              contact you by phone or email to arrange redelivery at your
              convenience.
            </li>
            <li className="item">
              If delivery is not possible due to the customer being unavailable
              at the designated time, a redelivery charge of BDT 50 will be
              charged for each consequent attempt of delivery. Online Laundry
              will endeavor to find a suitable re-delivery time.
            </li>
            <li className="item">
              If you have failed to accept or arrange redelivery of an Item for
              more than 90 days after the redelivery date specified in the Order
              we may dispose of the Item or donate it to an accredited charity
              of Online Laundry service choice.
            </li>
            <li className="item">
              You may arrange to have Items collected from, or re-delivered to,
              a third party, on condition that you do so at your own risk and
              the third party is prepared to acknowledge on your behalf.
            </li>
          </ul>
        </div>
        <div className="stylet-list">
          <h2 className="title">5. Service standards</h2>
          <ul className="list">
            <li className="item">
              We will provide the Services with reasonable care and skill in
              accordance with good industry standards.
            </li>
            <li className="item">
              We will not be liable for any delay or non-performance of our
              Services where you have failed to provide accurate information in
              your Order, for example, if an address is incomplete or
              inaccurate, or if you fail to accept redelivery of Items in
              accordance with an order.
            </li>
          </ul>
        </div>
        <div className="stylet-list">
          <h2 className="title">6. Price and Payment</h2>
          <ul className="list">
            <li className="item">
              The price of the Services will be set out in Our price list as set
              out in the App or at Online Laundry Service/prices and will be the
              price in force at the time you place your order. Our prices may
              change at any time, but price changes will not affect Orders that
              We have accepted.
            </li>
            <li className="item">
              Our prices include VAT. However, if the rate of VAT changes
              between the date we accept your Order and the date of payment, We
              will have to adjust the rate of VAT that you pay.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
