import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-primary backdrop-blur-md border-b border-gray-800 py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left side */}
          <Link href="/" className="flex-shrink-0 relative w-32 h-10 hover:scale-105 transition-transform">
            <Image
              src="/loog.png" // Ensure this file exists in /public/logo.png
              alt="Logo"
              fill
              className="rounded-lg"
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Navigation - Center */}
          <nav className="hidden md:flex space-x-8 items-center">
            {[
              ["Home", "/"],
              ["News", "/News"],
              ["Events", "/events"],
              ["About", "/about"],
            ].map(([name, path]) => (
              <Link
                key={name}
                href={path}
                className="text-text hover:text-secondary relative group transition-colors font-medium text-sm"
              >
                {name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA - Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-text hover:text-secondary hidden md:inline-flex items-center text-sm font-medium"
            >
              Contact
            </Link>

            <Link
              href="/join-us"
              className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-primary bg-secondary rounded-lg hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-light transition-all shadow-lg shadow-secondary/20 hover:shadow-xl"
            >
              <span className="relative z-10">Join Now</span>
              <span className="absolute inset-0 bg-secondary rounded-lg opacity-0 hover:opacity-100 transition-opacity"></span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;