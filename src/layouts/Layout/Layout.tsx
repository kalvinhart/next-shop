import React from "react";
import { Header } from "../Header";
import { WithChildrenProps } from "@/common/types/WithChildrenProps";

type Props = WithChildrenProps;

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
