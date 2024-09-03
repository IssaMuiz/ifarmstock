"use client";
import Navbar from "@/components/navbar";
import Sidenav from "@/components/sidenav";
import { useState, createContext } from "react";

export const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => {},
});

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      <Navbar />
      <Sidenav />
      <section
        className={`transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-50" : "opacity-100"
        }`}
      >
        {children}
      </section>
    </SidebarContext.Provider>
  );
};

export default ClientLayout;
