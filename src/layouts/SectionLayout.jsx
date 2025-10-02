import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function SectionLayout({ basePath, menuItems }) {
  return (
    <div>
      {/* زیرمنو */}
      <nav className="nav nav-pills mb-3">
        {menuItems.map((item, index) => (
          <Link key={index} className="nav-link" to={`${basePath}/${item.path}`}>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* محتوای صفحات داخلی */}
      <Outlet />
    </div>
  );
}
 