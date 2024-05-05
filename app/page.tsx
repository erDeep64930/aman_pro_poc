import Image from "next/image";
import Banner from "./components/Banner";
import MainsCategory from "./components/MainsCategory";
import PrelimsCategory from "./components/PrelimsCategory";

export default function Home() {
  return (
  <>
    <Banner />
    <MainsCategory />
    <PrelimsCategory />
  </>
  );
}
