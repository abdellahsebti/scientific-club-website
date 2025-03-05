
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Image from "next/image";
import * as React from "react";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary-dark to-primary text-text">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="pb-20">
        {/* Club Overview Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              About Our Scientific Club
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            We are a scientific club at the National Higher School of Nanoscience and Nanotechnology, dedicated to entrepreneurship and innovation. Our mission is to empower engineers by providing the resources, support, and guidance they need to embark on their entrepreneurial journey.
            </p>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Meet Our Founders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1, 
                  name: "Full Name",
                  role: "Co-Founder & Lead Scientist",
                  description: "Full Description",
                  image: "/loog.png", 
                },
                {
                  id: 2, 
                  name: "Full Name",
                  role: "Co-Founder & Engineer",
                  description: "Full Description",
                  image: "/loog.png", 
                },
                {
                  id: 3, 
                  name: "Full Name",
                  role: "Co-Founder & Biologist",
                  description: "Full Description",
                  image: "/loog.png", 
                },
              ].map((founder) => (
                <div
                  key={founder.id} 
                  className="bg-white/5 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all relative group"
                >
                  {/* Founder Image */}
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  {/* Founder Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-text mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-lg text-secondary mb-4">{founder.role}</p>
                    <p className="text-gray-400">{founder.description}</p>
                  </div>
                  {/* Glowing Effect on Hover */}
                  <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </section>
  );
};

// Export the AboutPage component
export default AboutPage;