import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-text">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Gradient Background */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-primary to-secondary-light opacity-90"
            aria-hidden="true"
          ></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Nanotech Ideas into Startups
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Epiphany is a club about innovation and entrepreneurship at the national higher school of nanoscience and nanotechnology. Our aim is to transform innovative ideas into functional startups by providing guidance, resources and expertise to our members.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 bg-secondary text-primary font-medium rounded-md shadow-md hover:bg-secondary-dark transition-colors"
            >
              Join Our Club
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-primary-lighter">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-text mb-10">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-text">
              At Epiphany, we bring your ideas to life by serving as a hub for innovation and creativity. Our mission is to bridge the gap between engineering and entrepreneurship, providing our members with the resources they need to launch their ventures. Through lectures, workshops, activities, and events, we equip aspiring entrepreneurs with the knowledge and support to kickstart their journey.
              </p>
            </div>
            <div>
              <p className="text-lg text-text">
              We collaborate closely with the school’s incubator and FabLab, guiding startups through a structured four-stage program. Additionally, we showcase their progress and achievements through events, social media, and other platforms, ensuring their innovations gain the visibility they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Stages Section */}
      <section className="py-16 bg-primary text-text">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-text mb-10">
            Our Four-Stage Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Idea Submission */}
            <div className="bg-primary-lighter p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-text mb-4">
                Idea Submission
              </h3>
              <p className="text-sm text-text/90">
                Submit your innovative idea to our committee of five experts for
                review and feedback.
              </p>
            </div>
            {/* Research Phase */}
            <div className="bg-primary-lighter p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-text mb-4">
                Research Phase
              </h3>
              <p className="text-sm text-text/90">
                Dive deep into your project with guidance from professors and
                engineers. We provide feedback, resources, and lectures to help
                refine your concept.
              </p>
            </div>
            {/* Financial Planning */}
            <div className="bg-primary-lighter p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-text mb-4">
                Financial Planning
              </h3>
              <p className="text-sm text-text/90">
                Develop a solid economic plan for your startup, including revenue
                models, team structure, and resource allocation.
              </p>
            </div>
            {/* Prototype Phase */}
            <div className="bg-primary-lighter p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-text mb-4">
                Prototype Phase
              </h3>
              <p className="text-sm text-text/90">
                Create your first prototype with support from our fablab and club
                funding. Bring your idea to life!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Activities Section */}
<section className="py-16 bg-tertiary text-primary">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Content (Left Side) */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl font-bold mb-6">What Else We Offer</h2>
        <p className="text-lg mb-8">
          Beyond the four stages, we provide a vibrant community to enrich your
          journey:
        </p>
        <ul className="list-disc pl-8 text-lg">
          <li>
            <strong>Student Blog:</strong> Share your stories and experiences with
            fellow members.
          </li>
          <li>
            <strong>Research Magazine:</strong> Publish your findings and insights
            in our quarterly publication.
          </li>
          <li>
            <strong>Debate Sessions & Games:</strong> Engage in thought-provoking
            discussions and interactive games.
          </li>
          <li>
            <strong>Lectures by Entrepreneurs:</strong> Learn from industry leaders
            and successful entrepreneurs.
          </li>
        </ul>
        <Link
          href="/about"
          className="inline-block px-8 py-3 bg-primary text-tertiary font-medium rounded-md shadow-md hover:bg-primary-dark transition-colors mt-8"
        >
          Learn More
        </Link>
      </div>

      {/* Image (Right Side) */}
      <div className="md:w-1/2">
        <Image
          src="/activities-image.jpg" // Replace with your actual image path
          alt="Activities"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-primary text-text">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-lg mb-8">
            Join us today and take the first step toward turning your idea into a
            reality. Together, well transform innovation into success!
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-3 bg-secondary text-primary font-medium rounded-md shadow-md hover:bg-secondary-dark transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
      <section className="py-20 px-4 bg-gradient-to-b from-primary ">
  <div className="max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
    {/* Text Content (Left Side) */}
    <div className="p-8 md:p-12 flex-grow text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
        Discover Our Magazine
      </h2>
      <p className="text-lg text-gray-400 mb-8">
      Explore our magazine now to discover the latest breakthroughs in nanotechnology research, stay updated on school news, and delve into the business side of nanotechnology—including startups, partnerships, and global investments.
      </p>
      <Link
        href="/"
        className="inline-block py-3 px-6 bg-secondary hover:bg-secondary-light text-primary font-medium rounded-md shadow-secondary-glow transition duration-300"
      >
        Explore Now
      </Link>
    </div>
    

    {/* Image (Right Side) */}
    <div className="relative w-full md:w-1/2">
      <Image
        src="/magazine.png" // Replace with your actual image path
        alt="Magazine Cover"
        layout="fill"
        objectFit="cover"
        className="rounded-none md:rounded-r-lg"
      />
    </div>
  </div>
</section>
<section className="py-20 px-4 bg-gradient-to-b from-secondary-dark to-primary">
  <div className="max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
    {/* Image (Left Side) */}
    <div className="relative w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
      <Image
        src="/Mobileapp.png" // Replace with your actual image path
        alt="Blog Cover"
        width={500} // Set the original width of the image
        height={300} // Set the original height of the image
        className="rounded-md max-w-full max-h-full object-cover"
      />
    </div>

    {/* Text Content (Right Side) */}
    <div className="p-8 md:p-12 flex-grow text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
        Welcome to Our Blog
      </h2>
      <p className="text-lg text-text-400 mb-8">
       
Our blog empowers students by providing a platform to share their stories and experiences, giving them a voice and agency. It fosters a space for expression, connection, and learning, allowing others to discover relatable insights and valuable lessons.
      </p>
      <Link
        href="/"
        className="inline-block py-3 px-6 bg-secondary hover:bg-secondary-light text-primary font-medium rounded-md shadow-secondary-glow transition duration-300"
      >
        Read Our Latest Posts
      </Link>
    </div>
  </div>
</section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}