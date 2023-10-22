import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoHNu4eg-P-MW8pZslFu3qwApTSrPdznlRQ&usqp=CAU"
          alt="React Logo"
        />
      </div>
      <div className="search-bar">
        <input type="text" />
        <button className="search-btn">Search</button>
      </div>
      <div>
        <img
          className="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNIOff5AuP0YdnbId7smDM0mrE4_Etc-_dA&usqp=CAU"
          alt="User icon"
        />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
