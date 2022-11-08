import React, { useState } from "react";
import FaqContents from "./FaqContents";
import "./Faq.css";
import ScrollArrow from "../Common/Scroll/ScrollArrow";
import PageTitle from "../Common/PageTitle/PageTitle";

const Faq = () => {
  const [faqs, setfaqs] = useState([
    {
      question: "What is Online Launder?",
      answers:
        "Online Launder is the Good Online Laundry Platform in Bangladesh. Online Launder has partnered up with the top laundry experts of the country and provides you with a FREE Pick-up and Delivery for your dirty laundry. With our Website, Mobile App or Hotline Number, you can just schedule an order and we will take it from there!",
      open: true,
    },
    {
      question: "Which locations do you offer your service?",
      answers:
        "We provide our services in multiple areas of Dhaka City. Please view our service areas to know more.",
      open: false,
    },
    {
      question:
        "What types of laundry do you clean? What services do you offer?",
      answers:
        "We provide solution to all sorts of laundry problems like dry cleaning, general laundry or pressing/ironing. Our Laundry experts provide a wide range of laundry services with expertise in different types of fabrics. We take notes of any special request and pass it to the experts. Apart from your clothes, we also provide a wide range of commercial cleaning and household items i.e. blanket, curtains cleaning. Please see the list of our partners to know more. Along with your daily laundry service, we also provide a commercial and corporate cleaning service.",
      open: false,
    },
    {
      question: "How do I schedule a pick up? When do you pick up my laundry?",
      answers:
        "You can call our hotline number to schedule a pick-up. You have to select a 60 - 120 minutes slot for the next day or at your convenient time and our team will be there. You can also request a “Priority Pick-up” for urgent cases, and our team will pick it up within the next 60 minutes or less.",
      open: false,
    },
    {
      question: "How long does it take? When is my laundry returned?",
      answers:
        "Depends on the day and time of your pickup & required services. Typically, items are cleaned and ready for delivery within 72-96 hours; however, we'll tell you when your order is expected to be ready when you schedule your order. Once your laundry is cleaned and ready for delivery, our team will notify you via SMS and our Delivery Team will come to your doorsteps and deliver your cleaned laundry. For urgent requests, we deliver within a shorter time-frame with some additional cost.",
      open: false,
    },
    {
      question: "How do I schedule a pick up? When do you pick up my laundry?",
      answers:
        "We are open for pickups and deliveries 7 days a week, including evenings! However, our hotlines are on from 10 AM to 8 PM every day.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  console.log(faqs);
  return (
    <div className="container mb-5">
      <PageTitle title={"FAQ"} />
      <ScrollArrow />
      <h6 className="mt-5 about-page-subtitle">Home / About Us</h6>
      <h3 className="about-page-title">
        Looking for answers? You’ll find them here.
      </h3>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FaqContents faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
