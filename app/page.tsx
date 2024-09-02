import Image from "next/image";
import Header from "@/components/header";
import Home from "@/components/home";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-16">
      <Header></Header>
      <Home></Home>
    </div>
  );
}
