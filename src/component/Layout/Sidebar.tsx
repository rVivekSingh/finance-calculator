import Link from "next/link";
import React from "react";
import SidebarBlock from "../SidebarBlock";

const Sidebar = () => {
  const popular_calc = [
    { text: "SIP Calculator", url: "/sip-calculator" },
    { text: "Lumpsum Calculator", url: "/" },
    { text: "SWP Calculator", url: "/" },
    { text: "Mutual Fund Returns Calculator", url: "/" },
    { text: "Sukanya Samriddhi Yojana Calculator", url: "/" },
    { text: "PPF Calculator", url: "/" },
    { text: "EPF Calculator", url: "/" },
    { text: "FD Calculator", url: "/" },
    { text: "RD Calculator", url: "/" },
    { text: "EMI Calculator", url: "/" },
  ];

  const more_calc = [
    { text: "SIP Calculator", url: "/" },
    { text: "Lumpsum Calculator", url: "/" },
    { text: "SWP Calculator", url: "/" },
    { text: "Mutual Fund Returns Calculator", url: "/" },
  ];
  return (
    <div className="sidebar">
      <SidebarBlock
        title="Popular Calculators"
        data={popular_calc}
        render={(item, index) =>
          item.text && (
            <Link
              className="sidebar-block-link"
              key={index}
              href={item.url}
              rel="noopener noreferrer"
            >
              {item.text}
            </Link>
          )
        }
      />

      <SidebarBlock
        title="More EMI Calculators"
        data={more_calc}
        render={(item, index) =>
          item.text && (
            <Link
              className="sidebar-block-link"
              key={index}
              href={item.url}
              rel="noopener noreferrer"
            >
              {item.text}
            </Link>
          )
        }
      />
    </div>
  );
};

export default Sidebar;
