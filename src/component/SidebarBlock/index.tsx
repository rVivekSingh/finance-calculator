// components/MapArray.tsx

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Item {
  text: string;
  url: string;
}

interface Props {
  title?: string;
  data: Item[];
  render?: (item: Item, index: number) => React.ReactNode;
}

const SidebarBlock: React.FC<Props> = ({ title, data, render }) => {
  const router = useRouter();

  const defaultRender = (item: Item, index: number) => {
    return (
      <Link
        className={`sidebar-block-link ${
          router.asPath === item.url ? "bg-blue-600/40" : ""
        }`}
        key={index}
        href={item.url}
        rel="noopener noreferrer"
      >
        {item.text}
      </Link>
    );
  };
  return (
    <div className="card !p-0">
      {title && <div className="sidebar-block-title">{title}</div>}
      {data.map((item, index) =>
        render ? render(item, index) : defaultRender(item, index)
      )}
    </div>
  );
};

export default SidebarBlock;
