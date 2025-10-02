import { ReactNode } from "react";
import "./globals.css";


export const metadata = {
  title: "Resume Builder",
  description: "Landing page with Tailwind CSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
