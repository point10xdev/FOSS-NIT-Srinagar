// src/pages/Team/components/TeamPageLayout.jsx
import TeamCard from "./TeamCard";
import PropTypes from "prop-types";

const TeamPageLayout = ({ members, title = "Our Team" }) => {
    return (
      // This wrapper is now transparent
      <div className="">
        <div className="font-playfair px-8 pt-8 ">
          <p className="text-gray-700 textShadow-md font-extrabold font-figtree text-4xl md:text-5xl leading-normal">
            {title}
          </p>
        </div>
        
        {/* MODIFIED: Changed lg:grid-cols-4 to lg:grid-cols-3 */}
        <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-20 pb-10 relative justify-items-center">
          
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

TeamPageLayout.propTypes = {  
  members: PropTypes.array.isRequired,
  title: PropTypes.string,
};