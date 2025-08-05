import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-50 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-gray-700">

      
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">SkillSync</h2>
          <p className="text-sm">Learn. Teach. Grow Together.</p>
        </div>

      
        <div className="flex space-x-6 text-sm">
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
          <a href="/privacy" className="hover:text-blue-600">Privacy</a>
          <a href="/terms" className="hover:text-blue-600">Terms</a>
        </div>

     

      </div>

      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
        © {new Date().getFullYear()} SkillSync. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
