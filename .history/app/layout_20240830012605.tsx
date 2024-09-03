import Navbar from "@/components/navbar";
import Sidenav from "@/components/sidenav";
import "@/styles/globals.css";
import { useState, createContext } from "react";

export const metadata = {
  title: "Grow",
  description: "Livestock farming e-commerce application",
};

export const SidebarContext = createContext({
  isOpen: false,
  toggleSidebar: () => {},
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <html lang="en">
      <body className="bg-gray-100 h-auto w-auto">
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
      </body>
    </html>
  );
}
