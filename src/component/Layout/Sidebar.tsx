import React from "react";
import SidebarBlock from "../SidebarBlock";

const Sidebar = () => {
  const popular_calc = [
    { text: "SIP Calculator", url: "/calculators/sip-calculator" },
    { text: "Lumpsum Calculator", url: "/calculators/lumpsum-calculator" },
    {
      text: "Mutual Fund Returns Calculator",
      url: "/calculators/mf-calculator",
    },
    /* {
      text: "Sukanya Samriddhi Yojana Calculator",
      url: "/calculators/ssy-calculator",
    }, */
    { text: "PPF Calculator", url: "/calculators/ppf-calculator" },
//    { text: "EPF Calculator", url: "/calculators/epf-Calculator" },
    { text: "FD Calculator", url: "/calculators/fd-calculator" },
    {
      text: "Personal Loan Calculator",
      url: "/calculators/personal-loan-emi-calculator",
    },
    {
      text: "Home Loan EMI Calculator",
      url: "/calculators/home-loan-emi-calculator",
    },
    {
      text: "Car Loan EMI Calculator",
      url: "/calculators/car-loan-emi-calculator",
    },
    //{ text: "RD Calculator", url: "/calculators/rd-calculator" },
   // { text: "SWP Calculator", url: "/calculators/swp-calculator" },
  ];

  return (
    <aside className="sidebar">
      <SidebarBlock title="Popular Calculators" data={popular_calc} />
    </aside>
  );
};

export default Sidebar;
