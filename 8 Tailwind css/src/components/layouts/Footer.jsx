import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Footer Text */}
        <div className="text-sm">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>

        {/* Footer Links */}
        <div className="flex space-x-4 text-sm">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
