import PageLayout from "../../Components/PageLayout"; // Adjust path if necessary

export default function Blogs() {
  return (
    // You might want to create a specific cover image for blogs, e.g., /common/blogs-cover.jpeg
    <PageLayout title={"Blogs"} imgUrl={"/common/blogs-cover.jpeg"}> 
      <div className="py-12">
        <div className="text-center py-20 bg-background ShadowLarge">
          <p className="text-gray-700 text-4xl font-figtree font-bold">Blogs</p>
          <p className="text-gray-600 text-2xl mt-6">Coming soon!</p>
        </div>
      </div>
    </PageLayout>
  );
}