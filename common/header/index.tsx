import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./menu";
import Logo from "../Logo";
import CategoryDrawer from "./category-drawer";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start gap-4">
          <CategoryDrawer />
          <Logo width={40} />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
