import React, { useState } from "react";
import laundryImage from "../../media/lundry.jpeg";
import workImage from "../../media/how it works.png";
import Service from "./Service";
import WhyChooseUs from "./WhyChooseUs";
import CountUp from "react-countup";
import ClientReview from "./ClientReview/ClientReview";
import "./Home.css";
import Subscribe from "./Subscribe/Subscribe";
// import SelectionArea from './SelectionArea/SelectionArea';
import { NavLink } from "react-router-dom";
import ScrollArrow from "../Common/Scroll/ScrollArrow";
import PageTitle from "../Common/PageTitle/PageTitle";
// import MessengerCustomerChat from "react-messenger-customer-chat";

const Home = () => {
  const [selected, setSelected] = useState("");
  // const serviceStyle = {
  //     display: 'flex',
  //     margin: '40px',
  //     justifyContent: 'space-between'
  // }
  const services = [
    {
      category: "Laundry Service",
      img:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32e30c20-24b9-446e-a9ea-d169018957e6/de9m13g-2b92de50-9452-4642-8ff6-21669d96c774.jpg/v1/fill/w_960,h_540,q_75,strp/laundry_service_in_discovery_gardens_by_purezonelaundry_de9m13g-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQwIiwicGF0aCI6IlwvZlwvMzJlMzBjMjAtMjRiOS00NDZlLWE5ZWEtZDE2OTAxODk1N2U2XC9kZTltMTNnLTJiOTJkZTUwLTk0NTItNDY0Mi04ZmY2LTIxNjY5ZDk2Yzc3NC5qcGciLCJ3aWR0aCI6Ijw9OTYwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.j3nw6Uhf5M25usTM3XslZfV62Bl6904OQet3Jl7uHaw",
    },
    {
      category: "Dry Cleaning Service",
      img:
        "https://junkmailimages.blob.core.windows.net/large/2940537fa59f4e1ea2591efa1113727d.jpg",
    },
    {
      category: "Iron Service",
      img:
        "https://st2.depositphotos.com/5624298/12418/i/600/depositphotos_124186854-stock-photo-electric-iron-and-shirts.jpg",
    },
  ];
  const whyChooses = [
    {
      image: "https://cdn-icons-png.flaticon.com/128/2830/2830175.png",
      name: "Free Pickup & Delivery",
      description:
        "Your laundry gets picked up and delivered back to your doorsteps for absolutely free.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/128/2563/2563863.png",
      name: "Quality Assurance",
      description:
        "Best Quality Assurance by the Top-notch Laundry experts of the country.",
    },
    {
      image:
        "https://cdn-icons.flaticon.com/png/128/3417/premium/3417915.png?token=exp=1639052052~hmac=993d6aac228519ff1e40e3db18a29df8",
      name: "Affordable Price",
      description:
        "No Additional Cost! You pay just as same as the price set by your selected laundry vendor.",
    },
    {
      image:
        "https://cdn-icons.flaticon.com/png/128/5670/premium/5670897.png?token=exp=1639052129~hmac=b49353641d38948b080db8744e2803e6",
      name: "Convenience",
      description:
        "With just a tap of a button, your laundry gets done. giving your leisure time to spend with family and friends.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/128/900/900553.png",
      name: "Personalized Experience",
      description:
        "We mostly take care of your chothes.We mostly take care of your chothes.We mostly take care of your chothes.",
    },
  ];
  return (
    <div>
      <ScrollArrow />
      <PageTitle title={"home"} />
      <div
        className="search-location-area py-5"
        style={{
          backgroundImage: `url('https://miro.medium.com/max/750/1*VNCMnzl5b8SsjYjGD_YFKA.jpeg')`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                style={{ height: "300px", width: "100%", borderRadius: "5px" }}
                src={laundryImage}
              />
            </div>
            <div className="search-city-area col-md-6 d-flex align-items-center justify-content-center">
              <div className="m-2  text-center">
                <h3 className="text-center">Choose Your Orders</h3>
                <NavLink to="/orderService">
                  {" "}
                  <button className="btn btn-primary"> Order Now </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {services.map((service) => (
            <Service service={service} key={service.category} />
          ))}
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <img style={{ width: "100%", height: "auto" }} src={workImage} />
      </div>
      <div className="Choose-Us-area mt-5">
        <h3 className="d-flex justify-content-center">WHY CHOOSE US</h3>
        <div className="container">
          <div className="row">
            {whyChooses.map((choose) => (
              <WhyChooseUs choose={choose} key={choose.name} />
            ))}
          </div>
        </div>
      </div>
      <div className="counter-section mt-5 text-white py-4">
        <div className="container">
          <div style={{ fontWeight: "bold" }} className="row">
            <div className="col-sm-12 col-md-12 col-lg-3 col-xs-12 my-2 d-flex align-items-center justify-content-center">
              <p className="mt-2 counter-title">Online Laundry</p>
            </div>
            <div className="col-lg-9 col-sm-12 col-md-12 col-xs-12 d-flex align-items-center justify-content-center">
              <div className="row">
                <div className="col-md-3 text-center col-xs-6 col-lg-3 col-sm-6 my-2 d-flex align-items-center justify-content-center">
                  <div>
                    <CountUp start={0} end={200} duration={5} />
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="col-md-3 text-center col-xs-6 col-lg-3 col-sm-6 my-2 d-flex align-items-center justify-content-center">
                  <div>
                    <CountUp start={0} end={2} duration={5} />
                    <p>Years in Business</p>
                  </div>
                </div>
                <div className="col-md-3 text-center col-xs-6 col-lg-3 col-sm-6 my-2 d-flex align-items-center justify-content-center">
                  <div>
                    <CountUp start={0} end={100} duration={5} />
                    <p>Satisfy Customers</p>
                  </div>
                </div>
                <div className="col-md-3 text-center col-xs-6 col-lg-3 col-sm-6 my-2 d-flex align-items-center justify-content-center">
                  <div>
                    <CountUp start={0} end={200} duration={5} />
                    <p>Total Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container feedback my-5">
        <h3 className="d-flex justify-content-center mb-5">
          OUR CUSTOMERS FEEDBACK
        </h3>
        <ClientReview />
      </div>
      <Subscribe />
      <div>
        {/* <MessengerCustomerChat
                pageId="102566725617011"
                appId="208066921510636"
             /> */}
      </div>
    </div>
  );
};

export default Home;
