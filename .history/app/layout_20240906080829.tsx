import "@/styles/globals.css";
import ClientLayout from "@/components/clientLayout";
export const metadata = {
  title: "iFarmStock",
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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
