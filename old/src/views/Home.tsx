import { Component } from "solid-js";
import Footer from "../components/Footer";
import AttrInfo from "./home/AttrInfo";

const Home: Component = () => {
  return (
    <>
      <div className="pb-14 relative">
        <AttrInfo></AttrInfo>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
