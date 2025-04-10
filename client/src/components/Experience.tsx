import { motion } from "framer-motion";
import { experience } from "@/lib/data";

interface ExperienceItemProps {
  experience: {
    id: number;
    role: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
    technologies: string[];
    icon: string;
    bgColor: string;
  };
  index: number;
}

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`absolute -left-14 mt-1.5 w-8 h-8 rounded-full bg-[${experience.bgColor}] flex items-center justify-center`}>
        <i className={`${experience.icon} text-white`}></i>
      </div>
      
      <div className="bg-[#1f2937] rounded-lg p-6 shadow-lg">
        <div className="flex flex-wrap justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{experience.role}</h3>
            <p className="text-[#3b82f6]">{experience.company} {experience.location && `| ${experience.location}`}</p>
          </div>
          <div className="bg-[#111827] px-3 py-1 rounded-full text-sm">{experience.period}</div>
        </div>
        
        <ul className="space-y-3 text-gray-300">
          {experience.responsibilities.map((responsibility, i) => (
            <li key={i} className="flex items-start">
              <i className="fas fa-angle-right text-[#0d9488] mt-1.5 mr-2"></i>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-[#111827] text-xs text-gray-400 rounded">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#111827]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <div className="section-title-underline"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey in the field of AI and Data Science
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative border-l-2 border-gray-700 ml-6 pl-8 space-y-12">
            {experience.map((exp, index) => (
              <ExperienceItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
