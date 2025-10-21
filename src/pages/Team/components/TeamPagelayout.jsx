// src/pages/Team/components/TeamPageLayout.jsx
import TeamCard from "./TeamCard";
import PropTypes from "prop-types";

const TeamPageLayout = ({ members, title = "Our Team" }) => {
    return (
      <div className="bg-background ShadowLarge">
        <div className="font-playfair px-8 pt-8 ">
          <p className="text-gray-700 textShadow-md font-extrabold font-figtree text-4xl md:text-5xl leading-normal">
            {title}
          </p>
        </div>
        <div className="px-10 flex flex-wrap justify-center gap-8 pt-20 pb-10 relative ">
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