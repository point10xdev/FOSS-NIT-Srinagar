
import Hero from "./Components/Hero";
import About from "./Components/About";
// import StickySocialSidebar from "./Components/StickySocialSidebar";

// import Gallery from "./Components/Gallery";
import ExcitingEvents from "./Components/ExcitingEvents";
import Footer from "../../Components/Footer"


export default function Home() {
  return (
    <>
      {/* <div className="background-image bg-[url('/group5.png')] w-screen top-[100%] md:top-[50%] h-[110rem] "></div>
      <div className="background-image hidden md:block bg-[url('/group8.png')] w-[26rem] h-[30rem] top-[390%] -left-[8%]  "></div>
      <div className="background-image hidden md:block bg-[url('/group6.png')] w-[20rem] h-[20rem] top-[230%] -right-[8%] "></div>
      <div className="background-image hidden md:block bg-[url('/group6.png')] w-[20rem] h-[20rem] top-[340%] right-[18%] "></div>
      <div className="background-image hidden md:block bg-[url('/group3.png')] w-[90rem] h-[36rem] top-[280%] -left-[2%] "></div> */}
      <div className="content">
          <Hero />
           <About />
          <ExcitingEvents /> 
          {/* <EventsSection /> */}
          {/* <Gallery/>
          <StickySocialSidebar /> */}
          <Footer /> 
      </div>
    </>
  );
}
