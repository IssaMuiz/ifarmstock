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
    <html lang="en">
      <body className="bg-gray-200 min-h-screen w-auto flex flex-col ">
        <main className="flex-grow">
          <ClientLayout>{children}</ClientLayout>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
