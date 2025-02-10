
import Header from "../components/Header"; 
import Link from "next/link";
import Footer from "../components/Footer";

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="pb-20">

      <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">
        Latest News and Updates
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
        Stay updated with the latest breakthroughs, discoveries, and
        advancements in science and technology.
      </p>
    </div>
  </section>
  <section className="py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Featured News
      </h2>
      <div className="rounded-lg overflow-hidden shadow-lg">
        
        <a href="/news/featured-article" className="block">
          <img
            src="/magazine.png" 
            alt="Featured Club Event"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 bg-white/5">
            <h3 className="text-2xl font-semibold text-text mb-4">
              Our Club Wins National Science Award!
            </h3>
            <p className="text-lg text-gray-400 mb-6">
              Learn about our club's recent achievement in the national science
              competition.
            </p>
            <button className="inline-block py-2 px-4 bg-secondary hover:bg-secondary-light text-text font-medium rounded-md transition duration-300">
              Read More
            </button>
          </div>
        </a>
      </div>
    </div>
  </section>
  {/* Recent Articles Section */}
  <section className="py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Recent Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "lorem ipsum",
            description:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lorem vel justo malesuada tincidunt.",
            image: "/magazine.png", 
            slug: "quantum-computing-workshop",
          },
          {
            title: "lorem ipsum",
            description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lorem vel justo malesuada tincidunt.",
            image: "/magazine.png", 
            slug: "sustainable-energy-project",
          },
          {
            title: "Space Exploration Challenge",
            description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lorem vel justo malesuada tincidunt.",
            image: "/magazine.png", 
            slug: "space-exploration-challenge",
          },
        ].map((article) => (
          <a
            key={article.slug}
            href={`/news/${article.slug}`}
            className="block bg-white/5 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            {/* Article Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            {/* Article Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-text mb-2">
                {article.title}
              </h3>
              <p className="text-gray-400">{article.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
 {/* Call-to-Action Section */}
 <section className="py-12 px-4 bg-primary-dark text-center">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">
        Join Our Community Today!
      </h2>
      <p className="text-lg md:text-xl text-gray-400 mb-8">
        Become part of our vibrant science and technology club. Participate in
        events, collaborate on projects, and make an impact.
      </p>
      <Link href="/join-us" passHref>
      <button className="inline-block py-3 px-6 bg-secondary hover:bg-secondary-light text-primary font-medium rounded-md shadow-secondary-glow transition duration-300">
  Join Us Now
</button> 
      
      </Link>
    </div>
  </section>



      </main>

      <Footer />
    </>
  );
}