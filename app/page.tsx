import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
import * as React from 'react';

export default function Home() {
  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-dark to-secondary text-text">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Because Every Epiphany Matters</h1>
          <p className="text-xl md:text-2xl mb-8">
            Epiphany is a club about innovation and entrepreneurship at the National Higher School of Nanoscience and Nanotechnology. Our aim is to transform innovative ideas into functional startups by providing guidance, resources, and expertise to our members.
          </p>
          <Link href="/join-us">
            <button className="px-8 py-3 bg-secondary hover:bg-secondary-light text-text font-medium rounded-md shadow-secondary-glow transition duration-300">
              Join Our Club
            </button>
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900 text-text">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>
          <p className="text-lg md:text-xl text-center mb-8">
            At Epiphany, we bring your ideas to life by serving as a hub for innovation and creativity. Our mission is to bridge the gap between engineering and entrepreneurship, providing our members with the resources they need to launch their ventures. Through lectures, workshops, activities, and events, we equip aspiring entrepreneurs with the knowledge and support to kickstart their journey.
          </p>
          <p className="text-lg md:text-xl text-center">
            We collaborate closely with the school’s incubator and FabLab, guiding startups through a structured four-stage program. Additionally, we showcase their progress and achievements through events, social media, and other platforms, ensuring their innovations gain the visibility they deserve.
          </p>
        </div>
      </section>

      {/* Four Stages Section */}
      <section className="py-20 bg-gray-800 text-text">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Four-Stage Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Idea Submission */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Idea Submission</h3>
              <p>Submit your innovative idea to our committee of five experts for review and feedback.</p>
            </div>
            {/* Research Phase */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Research Phase</h3>
              <p>Dive deep into your project with guidance from professors and engineers. We provide feedback, resources, and lectures to help refine your concept.</p>
            </div>
            {/* Financial Planning */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Financial Planning</h3>
              <p>Develop a solid economic plan for your startup, including revenue models, team structure, and resource allocation.</p>
            </div>
            {/* Prototype Phase */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Prototype Phase</h3>
              <p>Create your first prototype with support from our fablab and club funding. Bring your idea to life!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Activities Section */}
      <section className="py-20 bg-gray-900 text-text">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Content (Left Side) */}
          <div>
            <h2 className="text-4xl font-bold mb-6">What Else We Offer</h2>
            <ul className="space-y-4">
              <li>
                <strong>Student Blog:</strong> Share your stories and experiences with fellow members.
              </li>
              <li>
                <strong>Research Magazine:</strong> Publish your findings and insights in our monthly publication.
              </li>
              <li>
                <strong>Debate Sessions & Games:</strong> Engage in thought-provoking discussions and interactive games.
              </li>
              <li>
                <strong>Lectures by Entrepreneurs:</strong> Learn from industry leaders and successful entrepreneurs.
              </li>
            </ul>
            <Link href="/learn-more">
              <button className="mt-6 px-6 py-2 bg-secondary hover:bg-secondary-light text-text font-medium rounded-md transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
          {/* Image (Right Side) */}
          <div className="flex justify-center">
            <Image
              src="/assets/activities.jpg" // Replace with your image path
              alt="Additional Activities"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-secondary text-text">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-lg md:text-xl mb-8">
            Join us today and take the first step toward turning your idea into a reality. Together, we’ll transform innovation into success!
          </p>
          <Link href="/get-started">
            <button className="px-8 py-3 bg-secondary hover:bg-secondary-light text-text font-medium rounded-md shadow-secondary-glow transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Discover Our Magazine Section */}
      <section className="py-20 bg-gray-800 text-text">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Text Content (Left Side) */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Discover Our Magazine</h2>
            <p className="text-lg md:text-xl mb-8">
              Explore our magazine now to discover the latest breakthroughs in nanotechnology research, stay updated on school news, and delve into the business side of nanotechnology—including startups, partnerships, and global investments.
            </p>
            <Link href="/magazine">
              <button className="px-6 py-2 bg-secondary hover:bg-secondary-light text-text font-medium rounded-md transition duration-300">
                Explore Now
              </button>
            </Link>
          </div>
          {/* Image (Right Side) */}
          <div className="flex justify-center">
            <Image
              src="/assets/magazine.jpg" // Replace with your image path
              alt="Magazine Cover"
              width={400}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Welcome to Our Blog Section */}
      <section className="py-20 bg-gray-900 text-text">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image (Left Side) */}
          <div className="flex justify-center">
            <Image
              src="/assets/blog.jpg" // Replace with your image path
              alt="Blog Cover"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          {/* Text Content (Right Side) */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Welcome to Our Blog</h2>
            <p className="text-lg md:text-xl mb-8">
              Our blog empowers students by providing a platform to share their stories and experiences, giving them a voice and agency. It fosters a space for expression, connection, and learning, allowing others to discover relatable insights and valuable lessons.
            </p>
            <Link href="/blog">
              <button className="px-6 py-2 bg-secondary hover:bg-secondary-light text-text font-medium rounded-md transition duration-300">
                Read Our Latest Posts
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </>
  );
}