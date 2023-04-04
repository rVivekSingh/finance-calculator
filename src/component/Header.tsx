import React from "react";

export interface IHeaderProps {
}

export default function Header({ }: IHeaderProps) {
  return (
    <header
      className={
        "flex px-10 h-12 fixed z-50 top-0 left-0 right-0 bg-background shadow-sm border-b-2"}
    >
      <nav className="w-full flex">
        
      </nav>
    </header>
  );
}
