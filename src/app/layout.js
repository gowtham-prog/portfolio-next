import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { MetaData } from "next";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Gowtham Kumar Vulluri - Full Stack Engineer",
  description: "Portfolio of Gowtham Kumar Vulluri, Full Stack Engineer specializing in Django and React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.className}>
      <body>
        {/* <DefaultSeo {...SEO} /> */}
        {children}
      </body>
    </html>
  );
}
