import { motion } from "framer-motion";
import { projects } from "@/lib/data";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    period: string;
    achievements: string[];
    technologies: string[];
    bgColor: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div 
      className={`bg-[#111827] rounded-xl overflow-hidden shadow-xl hover:shadow-${project.bgColor}/20 transition-all project-card`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative">
        <svg viewBox="0 0 100 48" className="w-full h-48">
          <defs>
            <linearGradient id={`grad${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={project.bgColor === "primary-blue" ? "#1e40af" : project.bgColor === "primary-purple" ? "#6d28d9" : project.bgColor === "accent" ? "#0d9488" : "#3b82f6"} stopOpacity="0.2" />
              <stop offset="100%" stopColor={project.bgColor === "primary-blue" ? "#1e40af" : project.bgColor === "primary-purple" ? "#6d28d9" : project.bgColor === "accent" ? "#0d9488" : "#3b82f6"} stopOpacity="0.5" />
            </linearGradient>
            <pattern id={`pattern${index}`} patternUnits="userSpaceOnUse" width="100" height="100">
              <circle cx="50" cy="50" r="40" fill={`url(#grad${index})`} />
              <circle cx="0" cy="0" r="30" fill={`url(#grad${index})`} />
              <circle cx="100" cy="100" r="30" fill={`url(#grad${index})`} />
            </pattern>
          </defs>
          <rect width="100" height="48" fill={`url(#pattern${index})`} />
          <rect width="100" height="48" fill="#111827" fillOpacity="0.7" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent"></div>
        <div className={`absolute top-4 right-4 bg-${project.bgColor} text-white text-xs font-medium px-2 py-1 rounded-full`}>
          {project.period}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#3b82f6] mb-2">Key Achievements:</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            {project.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <i className="fas fa-check-circle text-[#0d9488] mt-1 mr-2"></i>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-[#1f2937] text-xs text-gray-300 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <a 
            href="#" 
            className={`text-[#3b82f6] hover:text-${project.bgColor} transition-colors text-sm font-medium flex items-center`}
            onClick={(e) => e.preventDefault()}
          >
            <span>View Case Study</span>
            <i className="fas fa-arrow-right ml-1"></i>
          </a>
          
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#1f2937]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-title-underline"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Showcasing my expertise in AI, ML, and data science through real-world applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-container">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
