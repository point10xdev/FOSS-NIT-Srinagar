import "../App.css";
import Header from "./Navbar/resizeableNavbar";
import Footer from "./Footer";
import { ReactNode } from "react";

// Define the props interface
interface PageLayoutProps {
  title: string;
  imgUrl: string;
  children: ReactNode;
}

// Apply the interface to the component's props
export default function PageLayout({ title, imgUrl, children }: PageLayoutProps) {
  return (
    <>
      <div className="content">
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, #000000 0%, #0000009f 50%, #00000033 100%), url(${imgUrl})`,
            backgroundPosition: "center center"
          }}
          className={`bg-cover bg-no-repeat bg-top h-[500px]`}
        >
          <div className="w-full h-full flex flex-col">
            <Header />
            <div className="px-10 md:px-[160px] lg:px-[180px] lg2:px-[220px] xl:px-[300px] xl2:px-[340px] flex items-center font-playfair flex-grow">
              <p className="text-white font-figtree font-extrabold textShadow-md text-4xl md:text-6xl overflow-visible">
                {title}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto px-4 md:px-[160px] lg:px-[180px] lg2:px-[220px] xl:px-[300px] xl2:px-[340px] py-20 md:py-28 lg:py-32">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

