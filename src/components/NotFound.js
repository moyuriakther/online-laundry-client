import React from "react";
import PageTitle from "./Common/PageTitle/PageTitle";

const NotFound = () => {
  return (
    <div className="not-found">
      <PageTitle title={"not found"} />
      <h2>404</h2>
      <p>Page not found</p>
    </div>
  );
};

export default NotFound;
