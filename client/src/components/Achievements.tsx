import { motion } from "framer-motion";
import { certifications } from "@/lib/data";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-[#111827]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Achievements</h2>
          <div className="section-title-underline"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Recognitions, certifications, and milestones in my professional journey
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Certifications */}
          <motion.div 
            className="bg-[#1f2937] rounded-xl shadow-xl p-6 mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#1e40af]/20 flex items-center justify-center mr-4">
                <i className="fas fa-certificate text-[#3b82f6] text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <motion.div 
                  key={cert.id}
                  className="bg-[#111827] rounded-lg p-4 border border-gray-800"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-semibold text-lg">{cert.title}</h4>
                  <p className="text-[#3b82f6]">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Research & Contributions */}
          <motion.div 
            className="bg-[#1f2937] rounded-xl shadow-xl p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#6d28d9]/20 flex items-center justify-center mr-4">
                <i className="fas fa-flask text-[#6d28d9] text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Research & Contributions</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#111827] rounded-lg p-5 border border-gray-800">
                <h4 className="font-semibold text-lg">Open Source Contributions</h4>
                <p className="text-gray-300 my-2">
                  Contributed to DL, AI Automation and computer vision research in open-source projects.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Research", "Open Source", "Computer Vision", "AI Automation"].map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-[#1f2937] text-xs text-gray-400 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#111827] rounded-lg p-5 border border-gray-800">
                <h4 className="font-semibold text-lg">Academic Leadership</h4>
                <p className="text-gray-300 my-2">
                  Led a team of 5 in delivering an academic AI project that improved decision-making by 40%.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Team Leadership", "Project Management", "Academic Research", "AI Applications"].map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-[#1f2937] text-xs text-gray-400 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#111827] rounded-lg p-5 border border-gray-800">
                <h4 className="font-semibold text-lg">Publications</h4>
                <p className="text-gray-300 my-2">
                  Published research findings on AI applications for student assistance systems.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Publication", "Research", "AI Ethics", "Student Systems"].map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-[#1f2937] text-xs text-gray-400 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;