import React from "react";
import { Outlet } from "react-router-dom";

export default function DownSection() {
  return (
    <div>
      <nav></nav>
      <Outlet />
    </div>
  );
}