import React from "react";
import SidebarBlock from "../SidebarBlock";

const Sidebar = () => {
  const popular_calc = [
    {
      text: "Personal Loan Calculator",
      url: "/",
    },
    { text: "SIP Calculator", url: "/calculator/sip-calculator" },
    { text: "Lumpsum Calculator", url: "/calculator/lumpsum-calculator" },
    {
      text: "Mutual Fund Returns Calculator",
      url: "/calculator/mf-calculator",
    },
    {
      text: "Sukanya Samriddhi Yojana Calculator",
      url: "/calculator/ssy-calculator",
    },
    { text: "PPF Calculator", url: "/calculator/ppf-calculator" },
    { text: "EPF Calculator", url: "/calculator/epf-Calculator" },
    { text: "FD Calculator", url: "/calculator/fd-calculator" },
    { text: "RD Calculator", url: "/calculator/rd-calculator" },
    { text: "SWP Calculator", url: "/calculator/swp-calculator" },
  ];

  return (
    <aside className="sidebar">
      <SidebarBlock title="Popular Calculators" data={popular_calc} />
    </aside>
  );
};

export default Sidebar;
