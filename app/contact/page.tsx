import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pb-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-secondary-dark text-text">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              We’d love to hear from you! Whether you have questions, feedback,
              or collaboration ideas, feel free to reach out.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form */}
              <form className="bg-white/5 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-text mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-text mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2 bg-transparent border border-gray-700 rounded-md text-text focus:border-secondary transition duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-block py-3 px-6 bg-secondary hover:bg-secondary-light text-text font-medium rounded-md shadow-secondary-glow transition duration-300"
                >
                  Send Message
                </button>
              </form>

              {/* Contact Details */}
              <div className="text-text">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="mb-4">
                  <span className="font-semibold">Email:</span>{" "}
                  contact@scientificclub.com
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Phone:</span> phonenum
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Address:</span>bla bla
                </p>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-secondary hover:text-secondary-light transition duration-300"
                    >
                      first
                    </a>
                    <a
                      href="#"
                      className="text-secondary hover:text-secondary-light transition duration-300"
                    >
                      second
                    </a>
                    <a
                      href="#"
                      className="text-secondary hover:text-secondary-light transition duration-300"
                    >
                      third
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}