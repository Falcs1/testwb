/* eslint-disable react/prop-types */
"use client";
import { ReactNode, useEffect } from "react";

const Bootstrap = ({ children }:{children:ReactNode}) => {
  useEffect(() => {
    import("bootstrap");
    document.body.scrollTo(0, 0);
  }, []);
  return <>{children}</>;
};

export default Bootstrap;
