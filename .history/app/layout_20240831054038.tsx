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
      <body className="bg-gray-200 h-screen w-screen mx-10">
        <section>{children}</section>
      </body>
    </html>
  );
}
