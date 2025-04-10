const Footer = () => {
  return (
    <footer className="py-10 bg-[#111827] border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold gradient-text">Appala Nithin</h3>
            <p className="text-gray-400 mt-2">Data Science & AI Engineer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="mailto:nithinpatel2025@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Appala Nithin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
