// src/pages/Team/components/TeamPageLayout.tsx
import TeamCard from "./TeamCard.tsx";

// Define interfaces for the props
interface Socials {
  linkedin?: string;
  github?: string;
  twitter?: string;
}

interface Member {
  id: number;
  name: string;
  role: string;
  image?: string;
  socials?: Socials;
}

interface TeamPageLayoutProps {
  members: Member[];
  title?: string;
}

const TeamPageLayout = ({ members, title = "Our Team" }: TeamPageLayoutProps) => {
    return (
      // This wrapper is now transparent
      <div className="">
        <div className="font-playfair px-8 pt-8 ">
          <p className="text-gray-700 textShadow-md font-extrabold font-figtree text-4xl md:text-5xl leading-normal">
            {title}
          </p>
        </div>
        
        {/* MODIFIED: Changed grid-cols-1 to grid-cols-2 and lg:grid-cols-3 to lg:grid-cols-4 */}
        <div className="px-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-20 pb-10 relative justify-items-center">
          
          {members.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image || "/team/placeholder.jpg"} // Fallback image
                socials={member.socials || {}}
              />
          ))}
        </div>
      </div>
    );
  };
  
export default TeamPageLayout;