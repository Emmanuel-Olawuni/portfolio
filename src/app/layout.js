import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-Inter",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Poppins",
  weight: ["100", "300", "500", "400", "600"],
});
export const metadata = {
  title: "Emmanuel Olawuni ",
  description:
    "Olawuni Emmanuel is an experienced software developer specializing in PHP Laravel and React Js, crafting robust web applications with secure backends and dynamic interfaces. Committed to clean code and staying updated with technology trends.",
};
import { MenuProvider } from "@/utils/MenuContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${inter.className} ${poppins.className} `}>
      <body>
        <MenuProvider>
          {/* <CustomCursor /> */}

          {children}
        </MenuProvider>
      </body>
    </html>
  );
}
