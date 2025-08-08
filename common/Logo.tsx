import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ width }: { width?: number }) => {
  return (
    <Link href={"/"} className="flex-center">
      <Image
        src={"/images/logo.svg"}
        width={width || 100}
        height={width || 100}
        alt={`${APP_NAME} logo`}
        priority
      />
    </Link>
  );
};

export default Logo;
