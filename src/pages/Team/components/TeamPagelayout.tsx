import TeamCard from "./TeamCard.tsx";
import { type Socials } from "./TeamCard.tsx";

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

const TeamPageLayout = ({ members, title = "" }: TeamPageLayoutProps) => {
    return (
      // This wrapper is transparent
      <div className="">

        {/* If We need subheadings in the future */}
        {/* <div className="font-playfair px-8 pt-8 ">
          <p className="text-gray-700 textShadow-md font-extrabold font-figtree text-4xl md:text-5xl leading-normal">
            {title}
          </p>
        </div> */}
        
        {/* <div className="px-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-20 pb-10 relative justify-items-center"> */}

        <div className="px-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 relative justify-items-center">
          
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