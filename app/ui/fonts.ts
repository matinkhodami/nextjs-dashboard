import { Inter, Lusitana } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default inter;
