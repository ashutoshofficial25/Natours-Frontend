import React from "react";

const ErrorPage = () => {
  return (
    <main className="main" style={{ height: "50vh" }}>
      <div className="error">
        <div className="error__title">
          <h2 className="heading-secondary heading-secondary--error">
            Uh oh! Something went wrong!{" "}
          </h2>
          <h2 className="error__emoji">😢 🤯</h2>
        </div>
        <div className="error__msg">Page not found!</div>
      </div>
    </main>
  );
};

export default ErrorPage;
