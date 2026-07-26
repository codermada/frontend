const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">YourBrand</h2>
          <p className="mt-3 max-w-sm text-sm text-gray-400">
            Building modern web experiences with React, TypeScript, and
            Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="transition hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="transition hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="transition hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="transition hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">
            Follow Us
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="transition hover:text-white">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-white">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-sm text-gray-500 md:flex-row">
          <p>© {year} YourBrand. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;