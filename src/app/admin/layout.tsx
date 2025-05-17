"use client";

import { Nav, NavLink } from "@/components/Nav";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/users">Customers</NavLink>
        <NavLink href="/orders">Sales</NavLink>
      </Nav>
      <div className="container my-6"></div>
    </>
  );
}
