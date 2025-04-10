import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-[#1f2937]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="section-title-underline"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="bg-[#111827] rounded-xl shadow-xl p-6 relative"
              variants={itemVariants}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#1e40af] flex items-center justify-center shadow-lg">
                <i className="fas fa-user-graduate text-white"></i>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-4">Education Journey</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-gray-700 pl-4 py-1">
                  <p className="text-[#3b82f6] font-medium">Aug 2022 - May 2025 (Expected)</p>
                  <h4 className="font-semibold">B.Tech in Data Science</h4>
                  <p className="text-gray-400">Holy Mary Institute of Technology and Science, Hyderabad</p>
                  <p className="text-sm text-gray-500">CGPA: 75% equivalent to 7.5/10</p>
                </div>
                
                <div className="border-l-2 border-gray-700 pl-4 py-1">
                  <p className="text-[#3b82f6] font-medium">2022 - Present</p>
                  <h4 className="font-semibold">Relevant Coursework</h4>
                  <p className="text-gray-400">Python, ML/DL, NLP, DBMS, Data Structures & Algorithms, AI</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-[#111827] rounded-xl shadow-xl p-6 mt-8 relative"
              variants={itemVariants}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#6d28d9] flex items-center justify-center shadow-lg">
                <i className="fas fa-briefcase text-white"></i>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 mt-4">Professional Development</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-gray-700 pl-4 py-1">
                  <p className="text-[#3b82f6] font-medium">Sep 2024 - Mar 2025</p>
                  <h4 className="font-semibold">Full-Stack Data Science & Generative AI</h4>
                  <p className="text-gray-400">Naresh I Technologies</p>
                  <p className="text-sm text-gray-500">6-month Professional Training with hands-on AI deployments</p>
                </div>
                
                <div className="border-l-2 border-gray-700 pl-4 py-1">
                  <p className="text-[#3b82f6] font-medium">Sep 2024 - Dec 2024</p>
                  <h4 className="font-semibold">Advanced Data Analytics & AI Internship</h4>
                  <p className="text-gray-400">Innomatics Research Labs</p>
                  <p className="text-sm text-gray-500">Letter of Recommendation for AI-driven research contributions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              variants={itemVariants}
            >
              Data Science Graduate specializing in AI/ML Solutions
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 mb-6"
              variants={itemVariants}
            >
              I'm a passionate AI Engineer and Data Scientist with expertise in designing, optimizing, and deploying AI/ML solutions. My focus areas include Natural Language Processing and Generative AI, where I build solutions that drive real-world impact.
            </motion.p>
            
            <motion.p 
              className="text-gray-300 mb-6"
              variants={itemVariants}
            >
              With strong foundations in ethical AI development, automation, and collaborative approaches, I've worked on projects that have significantly improved efficiency, accuracy, and operational productivity across various domains.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              variants={itemVariants}
            >
              <div className="bg-[#111827] p-4 rounded-lg border border-gray-800">
                <div className="flex items-center mb-2">
                  <i className="fas fa-brain text-[#0d9488] mr-3"></i>
                  <h4 className="font-semibold">AI & ML Solutions</h4>
                </div>
                <p className="text-gray-400 text-sm">Developing cutting-edge AI applications with real-world impact</p>
              </div>
              
              <div className="bg-[#111827] p-4 rounded-lg border border-gray-800">
                <div className="flex items-center mb-2">
                  <i className="fas fa-comments text-[#0d9488] mr-3"></i>
                  <h4 className="font-semibold">NLP & GenAI</h4>
                </div>
                <p className="text-gray-400 text-sm">Specialized in natural language processing and generative AI models</p>
              </div>
              
              <div className="bg-[#111827] p-4 rounded-lg border border-gray-800">
                <div className="flex items-center mb-2">
                  <i className="fas fa-code-branch text-[#0d9488] mr-3"></i>
                  <h4 className="font-semibold">Full-Stack Development</h4>
                </div>
                <p className="text-gray-400 text-sm">End-to-end implementation from data to deployment</p>
              </div>
              
              <div className="bg-[#111827] p-4 rounded-lg border border-gray-800">
                <div className="flex items-center mb-2">
                  <i className="fas fa-balance-scale text-[#0d9488] mr-3"></i>
                  <h4 className="font-semibold">Ethical AI</h4>
                </div>
                <p className="text-gray-400 text-sm">Committed to developing responsible AI solutions</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={itemVariants}
            >
              {["Python", "TensorFlow", "PyTorch", "NLP", "GenAI", "MLOps", "Data Analysis"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#1e40af]/20 text-[#3b82f6] text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
