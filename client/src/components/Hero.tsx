import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-b from-[#111827] to-[#1f2937]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#3b82f6] font-mono mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Appala Nithin</h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 secondary-gradient-text">Data Science & AI Engineer</h2>
            
            <p className="text-gray-300 mb-8 max-w-lg">
              Data Science graduate skilled in designing, optimizing, and deploying AI/ML solutions, specializing in NLP & Generative AI. Strong in ethical AI, automation, and collaboration to drive real-world impact.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 primary-gradient-btn rounded-lg font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-gray-700 rounded-lg font-medium hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex mt-10 gap-6">
              <a href="mailto:nithinpatel2025@gmail.com" className="text-gray-400 hover:text-white text-xl transition-colors" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-xl transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-xl transition-colors" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="tel:+917981994870" className="text-gray-400 hover:text-white text-xl transition-colors" aria-label="Phone">
                <i className="fas fa-phone"></i>
              </a>
              <button className="text-gray-400 hover:text-white text-xl transition-colors" aria-label="Download Resume" onClick={() => alert("Resume download functionality would be implemented here.")}>
                <i className="fas fa-file-download"></i>
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-[#1e40af]/20 to-[#6d28d9]/20 p-1">
              <div className="absolute inset-0 rounded-full overflow-hidden bg-[#1f2937] flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e40af" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <path 
                    fill="url(#gradient1)" 
                    d="M44.7,-76.4C58.9,-69.8,71.8,-59.2,79.6,-45.3C87.4,-31.3,90.1,-14.1,88.6,2.3C87.2,18.7,81.5,34.3,73.1,48.5C64.7,62.7,53.5,75.5,39.6,80.8C25.8,86.2,9.3,84.1,-5.9,79.8C-21.2,75.4,-35.2,68.8,-47.2,59.4C-59.2,50,-69.1,37.8,-75.2,23.4C-81.4,9,-83.7,-7.5,-79.9,-22.1C-76,-36.7,-66,-49.3,-53.4,-56.5C-40.8,-63.7,-25.6,-65.4,-10.9,-70.9C3.7,-76.3,18.4,-85.5,30.6,-83.1C42.8,-80.7,52.7,-66.7,44.7,-76.4Z" 
                    transform="translate(100 100)" 
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/40 to-[#6d28d9]/40 mix-blend-overlay"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-[#1f2937] p-2 rounded-lg shadow-lg">
                <div className="font-mono text-xs text-[#3b82f6]">
                  <span className="text-[#0d9488]">const</span> specialty <span className="text-white">=</span> <span className="text-green-400">"NLP & GenAI"</span>;
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-[#1f2937] p-2 rounded-lg shadow-lg">
                <div className="font-mono text-xs text-[#3b82f6]">
                  <span className="text-[#0d9488]">function</span> createImpact() &#123;<br/>
                  &nbsp;&nbsp;return <span className="text-green-400">"AI Solutions"</span>;<br/>
                  &#125;
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
