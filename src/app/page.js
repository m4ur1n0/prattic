
import HomeHeader from "@/components/HomeHeader";
import SketchedButtonLink from "@/components/SketchedButtonLink";
import StaticSketchedButton from "@/components/StaticSketchedButton";
import Image from "next/image";

export default function Home() {

  return (
    <div className="home-page-full w-screen h-screen md:px-[15%] lg:px-[30%] flex flex-col items-center">
      <div className="home-content-full w-full h-screen flex flex-col items-center ">

        <HomeHeader />

        <section className="flex flex-col gap-24 md:gap-18">
          <StaticSketchedButton vectorFile={"sharpButton0.svg"} label="SIGN UP" width={200} href="/sign-up" />

          <StaticSketchedButton vectorFile={"sharpButton1.svg"} label="SCHEDULE" width={200} href="/schedule" />
        </section>



      </div>
    </div>
  );
}