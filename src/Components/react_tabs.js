// components/Tabs.js
import React, { useState } from "react";
import "./Styles/details.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <button
          className={activeTab === "overview" ? "tab active" : "tab"}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={activeTab === "contact" ? "tab active" : "tab"}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "overview" && (
          <div>
            <p>Welcome to The Big Chill Cakery. We offer a variety of delightful treats and authentic South Indian food options.</p>
          </div>
        )}

        {activeTab === "contact" && (
          <div className="contact-details">
            <p><strong>Phone Number</strong><br /><span className="phone">+91 3423423216</span></p>
            <p><strong>The Big Chill Cakery</strong></p>
            <p>Shop 1, Plot D, Samruddhi Complex, Chincholi,<br />
              Mumbai-400002, Maharashtra</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
