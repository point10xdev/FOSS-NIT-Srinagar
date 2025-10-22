// src/pages/Team/Team.jsx
import PageLayout from "../../Components/PageLayout";
import TeamPageLayout from "./components/TeamPagelayout";
import { teamMembers } from "../../constants/team-member"; 

export default function Team() {
  return (
    // You'll need a cover image, e.g., /common/team-cover.jpeg
    <PageLayout title={"Our Team"} imgUrl={"/common/team-cover.jpeg"}> 
      
      <div className="py-12">
        {teamMembers.length > 0 ? (
          <TeamPageLayout members={teamMembers} title="Meet the Core Team" />
        ) : (
          <div className="text-center py-10 bg-background ShadowLarge">
            <p className="text-gray-700 text-4xl font-figtree font-bold">Our Team</p>
            <p className="text-gray-600 text-lg mt-4">Team details coming soon!</p>
          </div>
        )}
      </div>
      
    </PageLayout>
  );
}