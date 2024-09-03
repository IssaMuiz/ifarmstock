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
      <body className="bg-gray-100 h-auto w-auto">
        <section>{children}</section>
      </body>
    </html>
  );
}
