import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import ClientLayout from "@/components/clientLayout";
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
      <body className="bg-gray-200 h-screen w-auto">
        <ClientLayout className="mb-5">{children}</ClientLayout>
      </body>
    </html>
  );
}
