"use client";
import React from "react";
import { usePathname } from "next/navigation";
import MyNavbar from "./components/Navbar/MyNavbar";
import MyFooter from "./components/Footer/MyFooter";

export default function SiteChrome({ position }) {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname.startsWith("/auth");
  if (isAuthPage) return null;

  if (position === "top") return <MyNavbar />;
  if (position === "bottom") return <MyFooter />;

  return null;
}
