import { useState, useEffect, useRef, useCallback } from "react";
import Header from "../../../Components/Navbar/resizeableNavbar";
import Aos from "aos";
import "aos/dist/aos.css";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

function Hero() {
  const targetDate = "2025-11-01T10:00:00";

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();

    if (difference > 0) {
      return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // scrambling text animation
  const [scrambledText, setScrambledText] = useState("F<>SS Srinagar");
  const textRef = useRef(null);
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const originalText = "F<>SS Srinagar";

  const scrambleText = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 50);
  }, []);

  useEffect(() => {
    scrambleText();
    const intervalId = setInterval(scrambleText, 10000);
    return () => clearInterval(intervalId);
  }, [scrambleText]);

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #000000 0%, #00000044 50%, #00000033 100%), url(/assets/hero-cover.jpeg)",
      }}
    >
      <div>
        <Header />
      </div>
      <div className="pt-4 md:pt-32 p-7 md:p-32">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="true"
          className="text-white text-xl ss:text-2xl md:text-4xl text-center overflow-visible xs:whitespace-wrap"
        >
          1<sup className="text-white text-xl md:text-2xl">st </sup>
          Nov 2025
        </div>

        <p
          ref={textRef}
          className="text-center text-3xl ss:text-5xl sm:text-6xl md:text-7xl mt-4 text-white font-pressStart font-extrabold overflow-visible textShadow"
        >
          {scrambledText}
        </p>

        <p className="text-center text-2xl ss:text-3xl mt-4 text-white font-kodeMono font-bold overflow-visible textShadow-sm">
          Building the Future with Open Source
        </p>

        <div className="font-kodeMono mt-6 md:mt-10 flex justify-center">

          {/* --- MOBILE VIEW --- */}
          <div
            className="md:hidden w-full mt-7 px-4 flex-col text-white font-bold overflow-hidden text-center"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <div className="block text-6xl ss:text-7xl font-semibold overflow-visible">
              {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}
            </div>
            <div className="flex justify-center gap-4 ss:gap-8 text-lg ss:text-xl overflow-visible textShadow-sm mt-2">
              <span className="flex-1">DAYS</span>
              <span className="flex-1">HOURS</span>
              <span className="flex-1">MINUTES</span>
            </div>
          </div>

          {/* --- DESKTOP VIEW --- */}
          <div className="w-full min-w-150 mt-7 px-12 lg:px-40 hidden md:flex flex-wrap gap-6 justify-between text-white font-bold overflow-hidden">
            <div data-aos="fade-down" className="text-center overflow-visible">
              <div className="block text-6xl md:text-9xl font-semibold overflow-visible">
                {timeLeft.days}
              </div>
              <div className="block text-lg md:text-3xl overflow-visible textShadow-sm">
                DAYS
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              className="text-center overflow-visible"
            >
              <div className="block text-6xl md:text-9xl font-semibold overflow-visible">
                {timeLeft.hours}
              </div>
              <div className="block text-lg md:text-3xl overflow-visible textShadow-sm">
                HOURS
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="200"
              className="text-center overflow-visible"
            >
              <div className="block text-6xl md:text-9xl font-semibold overflow-visible">
                {timeLeft.minutes}
              </div>
              <div className="block text-lg md:text-3xl overflow-visible textShadow-sm">
                MINUTES
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="text-center overflow-visible"
            >
              <div className="block text-6xl md:text-9xl font-semibold overflow-visible">
                {timeLeft.seconds}
              </div>
              <div className="block text-lg md:text-3xl overflow-visible textShadow-sm">
                SECONDS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;