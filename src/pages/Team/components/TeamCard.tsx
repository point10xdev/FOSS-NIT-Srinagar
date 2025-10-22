import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// Define interfaces for the props
interface Socials {
  linkedin?: string;
  github?: string;
  twitter?: string;
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
      {/* This div is transparent */}
      <div
        className="rounded-xl bg-transparent flex flex-col items-center w-[280px] md:w-[310px] px-4 py-4 mb-6"
      >
        <img
          loading="lazy"
          className="w-[250px] h-[330px] md:w-[280px] md:h-[360px] object-cover overflow-hidden z-20 absolute -mt-10 rounded-xl ImgShadow transform hover:scale-105 transition duration-200 ease-in-out"
          src={image}
          alt={`${name} - ${role}`}
        />
        <div className="mt-[300px] md:mt-[340px] w-full text-center">
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
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-white transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

