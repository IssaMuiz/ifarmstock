import "@/styles/globals.css";
import Footer from "@/components/footer";
import ClientLayout from "@/components/clientLayout";
export const metadata = {
  title: "iFarmStock",
  description: "Livestock farming e-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="flex flex-col">
      <body className="bg-gray-200 min-h-screen w-auto flex-grow">
        <ClientLayout>{children}</ClientLayout>
      </body>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
