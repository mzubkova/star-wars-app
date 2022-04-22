import { ReactNode } from "react";
import Navbar from "../Navbar";

export type TProps = {
  children: ReactNode;
};

const Layout = ({ children }: TProps) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
