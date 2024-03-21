import {Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"] ,weight:["100","200","300","400","500","600","700","800","900"]});

export const metadata = {
  title: "Thief Alarm",
  description: "A thief alarm system built using TensorFlow and Next.js AI.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
