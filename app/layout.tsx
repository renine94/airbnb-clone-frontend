import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/modals/LoginModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb Clone - kyle",
  description: "youtube로 따라하는 airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = <p>yo yo</p>;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="pt-32">{children}</div>

        <LoginModal />
      </body>
    </html>
  );
}
