import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import { Homepage } from "@/components/component/homepage";

export default function Home() {
  return (
   <>
   <Homepage/>
   </>
  );
}
