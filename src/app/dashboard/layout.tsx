import NavBar from "@/components/DashboardPage/NavBar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  );
}
