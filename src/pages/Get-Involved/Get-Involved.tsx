import PageLayout from "../../Components/PageLayout"; //

export default function GetInvolved() {
  return (
    // We can reuse the cover image from the about page or create a new one
    <PageLayout title={"Get Involved"} imgUrl={"/common/about-cover.jpeg"}> 
      <div className="py-12">
        <div className="text-center py-6 bg-background ShadowLarge">
          <p className="text-gray-700 text-4xl font-figtree font-bold">
            Thanks for your Interest!
          </p>
          <p className="text-gray-600 text-2xl mt-6">
            We are not currently accepting new members.
          </p>
          <p className="text-gray-600 text-xl mt-4">
            Follow our social media channels to stay updated on future recruitment drives!
          </p>
        </div>
      </div>
    </PageLayout>
  );
}