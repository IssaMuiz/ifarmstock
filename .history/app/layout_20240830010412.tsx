import Navbar from "@/components/navbar";
import Sidenav from "@/components/sidenav";
import "@/styles/globals.css";
import { MouseEventHandler, useState } from "react";

export const metadata = {
  title: "Grow",
  description: "Livestock farming e-commerce application",
};

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
        <Navbar isOpen={isOpen} />
        <Sidenav isOpen={isOpen} />
        <section isOpen={isOpen}>{children}</section>
      </body>
    </html>
  );
}
