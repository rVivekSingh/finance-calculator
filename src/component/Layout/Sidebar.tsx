import Link from "next/link";
import React from "react";
import SidebarBlock from "../SidebarBlock";

const Sidebar = () => {
  const popular_calc = [
    { text: "SIP Calculator", url: "/calculator/sip-calculator" },
    { text: "Lumpsum Calculator", url: "/" },
    {
      text: "Personal Loan EMI Calculator",
      url: "/calculator/personal-loan-emi-calculator",
    },
    { text: "Mutual Fund Returns Calculator", url: "/" },
    { text: "Sukanya Samriddhi Yojana Calculator", url: "/" },
    { text: "PPF Calculator", url: "/" },
    { text: "EPF Calculator", url: "/" },
    { text: "FD Calculator", url: "/" },
    { text: "RD Calculator", url: "/" },
    { text: "EMI Calculator", url: "/" },
  ];

  return (
    <div className="sidebar">
      <SidebarBlock title="Popular Calculators" data={popular_calc} />
    </div>
  );
};

export default Sidebar;
