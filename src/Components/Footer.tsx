import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Removed FaTwitter
import { SiLinktree, SiX } from "react-icons/si"; // Import the SiX icon

const Footer = () => {
  return (
    <footer
      style={{
        // backgroundImage:
        //   "linear-gradient(to bottom, #000000 0%, #0000009f 50%, #00000033 100%), url(/common/footer.png)",
        backgroundImage: `url(/assets/footer.png)`,
        backgroundPosition: "center center",
      }}
      className="bg-blend-overlay bg-cover bg-top h-96 relative text-white flex flex-col justify-center items-center font-playfair"
    >
      {/* Overlay for reducing brightness of background image */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <div className="top-0 relative h-auto overflow-hidden w-100%">
        
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold font-neotriad sm:tracking-[0.25em] md:tracking-[0.5em] opacity-40 z-2 my-20 text-green-50 leading-normal overflow-visible">
          FOSS
        </h2>
      </div>

      <div className="absolute h-auto left-0 right-0 z-10 flex flex-col justify-around items-center mt-28">
        <div className="container mx-auto text-center">
          <div className="relative z-10 mb-4 overflow-visible text-3xl md:text-5xl lg:text-8xl">
            <a
              href="/"
              className="text-3xl md:text-5xl font-pressStart lg:text-6xl font-bold"
            >
              FOSS NIT Srinagar
            </a>
          </div>

          <div className="mb-4">
            <a
              href="mailto:foss@nitsri.ac.in"
              className="text-md md:text-xl hover:text-secondary underline-animate relative inline-block font-kodeMono"
            >
              foss@nitsri.ac.in
            </a>
          </div>

          <div className="flex justify-center space-x-4 gap-x-5">
            <a
              href="https://www.instagram.com/fossclubnitsrinagar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={24}
                className="text-secondary hover:text-white transition duration-300"
              />
            </a>

            <a
              href="https://www.x.com/fossnitsrinagar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiX
                size={24}
                className="text-secondary hover:text-white transition duration-300"
              />
            </a>
            {/* --- End of change --- */}
            <a
              href="https://www.linkedin.com/in/foss-club-nit-srinagar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={24}
                className="text-secondary hover:text-white transition duration-300"
              />
            </a>
            <a
              href="https://linktr.ee/fossclubnitsrinagar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinktree
                size={24}
                className="text-secondary hover:text-white transition duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;