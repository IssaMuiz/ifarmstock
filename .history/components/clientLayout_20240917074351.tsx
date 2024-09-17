"use client";
import Navbar from "@/components/navbar";
import Sidenav from "@/components/sidenav";
import { useState, createContext } from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";

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
    <Provider store={store}>
      <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
        <Navbar />
        <Sidenav />
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-10 ${
            isOpen
              ? "opacity-70 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleSidebar}
        ></div>
        <section
          className={`relative z-0 transition-all duration-300 ease-in-out `}
        >
          {children}
        </section>
      </SidebarContext.Provider>
    </Provider>
  );
};

export default ClientLayout;
