import PageLayout from "../../Components/PageLayout";
import TeamPageLayout from "./components/TeamPagelayout";
import { teamMembers } from "../../constants/team-member"; 

export default function Team() {
  return (
    
    <PageLayout title={"Meet the Core Team"} imgUrl={"/common/team-cover.jpeg"}> 
      
      <div className="py-4">
        {teamMembers.length > 0 ? (
          <TeamPageLayout members={teamMembers}  />
        ) : (
          <div className="text-center py-10 bg-background ShadowLarge">
            <p className="text-gray-600 text-lg mt-4">Team details coming soon!</p>
          </div>
        )}
      </div>
      
    </PageLayout>
  );
}