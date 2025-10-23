import { FaLinkedin, FaGithub, } from "react-icons/fa";

export interface Socials {
  linkedin?: string;
  github?: string;
  Fossunited?: string; 
}

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  socials: Socials;
}

export default function TeamCard({ name, role, image, socials }: TeamCardProps) {
  return (
    <>
      <div
        className="rounded-xl bg-transparent flex flex-col items-center w-[160px] md:w-[240px] px-4 py-4 mb-6"
      >
        <img
          loading="lazy"
          className="w-[140px] h-[180px] md:w-[210px] md:h-[280px] object-cover overflow-hidden z-20 absolute -mt-10 rounded-xl ImgShadow transform hover:scale-105 transition duration-200 ease-in-out"
          src={image}
          alt={`${name} - ${role}`}
        />
  
        <div className="mt-[160px] md:mt-[250px] w-full text-center">
          <p className="font-semibold text-2xl text-white textShadow-sm font-figtree normalcase capitalize">
            {name}
          </p>
          <p className="text-base text-secondary mt-3 font-kodeMono">{role}</p>
          
          <div className="flex justify-center space-x-4 mt-4">
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-white transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            )}
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-white transition duration-300"
              >
                <FaGithub size={24} />
              </a>
            )}

            {socials.Fossunited && (
              <a
                href={socials.Fossunited}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* This div uses the hover classes for the background color,
                  and the style attribute applies your SVG as a mask.
                */}
                <div 
                  className="w-6 h-6 bg-primary hover:bg-white transition duration-300"
                  style={{
                    maskImage: `url("/fossunited-white.svg")`,
                    WebkitMaskImage: `url("/fossunited-white.svg")`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                  }}
                ></div>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}