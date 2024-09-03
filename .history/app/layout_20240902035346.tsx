import Footer from "@/components/footer";
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
      <body className="bg-gray-200 h-screen w-auto ">
        <section className="mx-10">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
