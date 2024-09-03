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
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-10 ${
          isOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-100 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>
      <section
        className={`relative z-0 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-50" : "opacity-100"
        }`}
      >
        {children}
      </section>
    </SidebarContext.Provider>
  );
};

export default ClientLayout;
