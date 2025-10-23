import PageLayout from "../../Components/PageLayout"; // Adjust path if necessary
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"; // Keep useEffect for scrollToTop

export default function AboutPage() {
  useEffect(() => {
    // Ensure scrolling to top when navigating to this page
    window.scrollTo(0, 0);

    // Refresh AOS to detect elements on this new page
    Aos.refresh();
  }, []);

  return (
    // Use PageLayout for the overall structure
    <PageLayout title={"About Us"} imgUrl={"/common/about-cover.jpeg"}>
      
      {/* Container for the main content */}
      {/* FIX 1: Add an 'id' to this container. This will be our "anchor".
      */}
      <div id="about-content-anchor" className='px-4 sm:px-0 flex justify-center items-center py-10 md:py-16'>
        
        {/* The white card container */}
        {/* FIX 2: Add 'data-aos-anchor' pointing to the ID above.
          This tells AOS to trigger this animation as soon as
          '#about-content-anchor' enters the viewport,
          which happens immediately on page load.
        */}
        <div 
          data-aos="fade-down" 
          data-aos-anchor="#about-content-anchor" 
          className='p-8 bg-background sm:p-12 md:w-4/5 lg:w-3/4 xl:w-3/5 ShadowLarge'
        >
          {/* Header section */}
          <div className='overflow-visible mb-5'>
            <p className='text-xs sm:text-sm font-semibold text-gray-500'>
              Empowering students through open source education and collaboration
            </p>
            <h2 className='text-gray-800 textShadow-md text-4xl sm:text-5xl md:text-6xl overflow-visible font-semibold font-figtree mt-2'>
              About FOSS NIT Srinagar
            </h2>
          </div>

          {/* Core values/pillars section (rest of your code...) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Learn Pillar */}
            <div className="text-center p-4">
              {/* ... (icon) */}
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Learn</h3>
              <p className="text-gray-600">
                Master new technologies and programming languages through hands-on workshops and projects.
              </p>
            </div>

            {/* Collaborate Pillar */}
            <div className="text-center p-4">
              {/* ... (icon) */}
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Collaborate</h3>
              <p className="text-gray-600">
                Work with like-minded individuals on exciting open source projects and build lasting connections.
              </p>
            </div>

            {/* Innovate Pillar */}
            <div className="text-center p-4">
              {/* ... (icon) */}
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Innovate</h3>
              <p className="text-gray-600">
                Create innovative solutions and contribute to projects that make a real difference in the world.
              </p>
            </div>
          </div>

          {/* Additional text/sections can go here */}
          <div className="mt-12 text-gray-700">
            <p className="mb-4">
              FOSS NIT Srinagar is the official Free and Open Source Software community of the National Institute of Technology, Srinagar. Our mission is to foster a vibrant culture of open source development, collaboration, and learning within the student community.
            </p>
            <p>
              We organize workshops, talks, hackathons, and meetups to help students get involved in the world of open source, contribute to impactful projects, and build valuable skills for their future careers. Join us to learn, collaborate, and innovate!
            </p>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}