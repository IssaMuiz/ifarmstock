import Navbar from "@/components/navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "Grow",
  description: "Livestock farming e-commerce application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className="bg-gray-200 h-screen w-auto">
        <section className="mb-5">{children}</section>
      </body>
    </html>
  );
}
