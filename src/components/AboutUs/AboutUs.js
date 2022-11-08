import React from "react";
import PageTitle from "../Common/PageTitle/PageTitle";
import ScrollArrow from "../Common/Scroll/ScrollArrow";

const AboutUs = () => {
  return (
    <div className="container mb-5 pb-5">
      <PageTitle title={"about us"} />
      <ScrollArrow />
      <div className="container about-us-page">
        <h6 className="mt-5 about-page-subtitle">Home / About Us</h6>
        <h3 className="about-page-title">
          We wanted an easy way to get laundry done
        </h3>
        <div className="grid row">
          <div className="large cover col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32e30c20-24b9-446e-a9ea-d169018957e6/de9m13g-2b92de50-9452-4642-8ff6-21669d96c774.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMyZTMwYzIwLTI0YjktNDQ2ZS1hOWVhLWQxNjkwMTg5NTdlNlwvZGU5bTEzZy0yYjkyZGU1MC05NDUyLTQ2NDItOGZmNi0yMTY2OWQ5NmM3NzQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kzKMRiE6dcFjZ3RLiL0uziBThWYbdOon-ajkeF-zbyg" />
          </div>
          <div className="small cover col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="top">
              <img src="http://www.strategiesonline.net/wp-content/uploads/2014/09/laundry-service.png" />
            </div>
            <div className="bottom mt-4">
              <img src="https://st2.depositphotos.com/1000291/6146/i/600/depositphotos_61468473-stock-photo-laundry-services.jpg" />
            </div>
          </div>
        </div>
        <p className="about-page-paragraph">
          We are a group of super-enthusiastic people who wanted to make other
          people’s lives easier by providing them with some extra time; the time
          they would spend sorting and doing their laundry. We believe there is
          more to one’s life than spending time after doing laundry and so we
          provide you with the online laundry platform in Bangladesh. With our
          Website or Hotline number, you can choose which laundry service
          provider you want to connect with and schedule a free pickup and
          delivery with us. It's an affordable and convenient way of getting
          your wash, laundry, and dry-clean done with premium quality. We do it
          fast, friendly and smart. With that extra load off your shoulder, you
          can now sit back, relax and enjoy the free time; if we can add even a
          little extra free time to your busy schedule, we would believe we are
          doing a good job.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
