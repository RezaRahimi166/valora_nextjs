import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex-center">
      <Image
        src={"/images/logo.svg"}
        width={100}
        height={100}
        alt={`${APP_NAME} logo`}
        priority
      />
    </Link>
  );
};

export default Logo;
