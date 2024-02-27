import { ClerkProvider } from "@clerk/nextjs";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata = {
  title: "MedMentor",
  description: "Connecting premed students with their mentors",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
