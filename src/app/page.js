
import HomeHeader from "@/components/HomeHeader";
import SketchedButtonLink from "@/components/SketchedButtonLink";
import StaticSketchedButton from "@/components/StaticSketchedButton";
import Image from "next/image";

export default function Home() {

  function button1() {
    alert("click");
  }

  return (
    <div className="home-page-full w-screen h-screen md:px-[15%] lg:px-[30%] flex flex-col items-center">
      <div className="home-content-full w-full h-screen flex flex-col items-center border">

        <HomeHeader />

        <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="SIGN UP" width={200} href="/sign-up" />


      </div>
    </div>
  );
}