// components/MapArray.tsx

import React from "react";

interface Item {
  text: string;
  url: string;
}

interface Props {
  title?: string;
  data: Item[];
  render: (item: Item, index: number) => React.ReactNode;
}

const SidebarBlock: React.FC<Props> = ({ title, data, render }) => {
  return (
    <div className="card !p-0">
      {title && <div className="sidebar-block-title">{title}</div>}
      {data.map((item, index) => render(item, index))}
    </div>
  );
};

export default SidebarBlock;
