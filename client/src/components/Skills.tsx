import { motion } from "framer-motion";
import { tools } from "@/lib/data";

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
}

const SkillBar = ({ name, percentage, color }: SkillBarProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className={`text-${color}`}>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div 
          className={`bg-gradient-to-r ${color === "secondary" ? "from-[#3b82f6] to-[#0d9488]" : color === "primary-purple" ? "from-[#1e40af] to-[#6d28d9]" : "from-[#6d28d9] to-[#0d9488]"} h-2 rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    </div>
  );
};

interface ToolGridItemProps {
  icon: string;
  title: string;
  description: string;
}

const ToolGridItem = ({ icon, title, description }: ToolGridItemProps) => {
  return (
    <motion.div 
      className="bg-[#1f2937] p-4 rounded-lg text-center hover:bg-[#1f2937]/80 transition-colors"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <i className={`${icon} text-2xl text-[#3b82f6] mb-2`}></i>
      <h4 className="font-medium">{title}</h4>
      <p className="text-xs text-gray-400">{description}</p>
    </motion.div>
  );
};

// Skill category component
interface SkillCategoryProps {
  title: string;
  icon: string;
  iconBgColor: string;
  iconColor: string;
  skills: string[];
}

const SkillCategory = ({ title, icon, iconBgColor, iconColor, skills }: SkillCategoryProps) => {
  return (
    <motion.div 
      className="bg-[#1f2937] rounded-xl shadow-xl p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-5">
        <div className={`w-12 h-12 rounded-lg ${iconBgColor} flex items-center justify-center mr-4`}>
          <i className={`${icon} ${iconColor} text-xl`}></i>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <div className="space-y-2.5">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-start gap-2">
            <i className="fas fa-check-circle text-[#0d9488] mt-1 text-sm"></i>
            <p className="text-sm text-gray-300">{skill}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const programmingLanguages = [
    { name: "Python", percentage: 95 },
    { name: "SQL", percentage: 85 },
    { name: "R", percentage: 70 },
    { name: "JavaScript", percentage: 65 }
  ];

  const mlTechniques = [
    { name: "Supervised Learning", percentage: 90 },
    { name: "Deep Learning", percentage: 85 },
    { name: "NLP", percentage: 95 },
    { name: "Computer Vision", percentage: 80 }
  ];

  const aiTools = [
    { name: "GPT-3/4", percentage: 90 },
    { name: "BERT", percentage: 85 },
    { name: "LangChain", percentage: 80 },
    { name: "Stable Diffusion", percentage: 75 }
  ];

  const toolGridItems = [
    { icon: "fab fa-python", title: "Python Ecosystem", description: "Pandas, NumPy, Scikit-learn" },
    { icon: "fas fa-brain", title: "Deep Learning", description: "TensorFlow, PyTorch, Hugging Face" },
    { icon: "fas fa-comment-dots", title: "NLP", description: "BERT, Transformers, Text Generation" },
    { icon: "fas fa-robot", title: "GenAI", description: "GPT-4, RAG, LLM Fine-tuning" },
    { icon: "fas fa-database", title: "Databases", description: "MySQL, PostgreSQL, SQL Server" },
    { icon: "fas fa-cloud", title: "Cloud", description: "Azure" },
    { icon: "fas fa-cogs", title: "MLOps", description: "MLflow, GitHub Actions, Deployment" },
    { icon: "fas fa-chart-bar", title: "Visualization", description: "Power BI, Tableau, Matplotlib" }
  ];

  return (
    <section id="skills" className="py-20 bg-[#111827]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-title-underline"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">My technical expertise spans across various domains of AI, ML, and Data Science</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <motion.div 
            className="bg-[#1f2937] rounded-xl shadow-xl p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#1e40af]/20 flex items-center justify-center mr-4">
                <i className="fas fa-code text-[#3b82f6] text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold">Programming Languages</h3>
            </div>
            
            <div className="space-y-4">
              {programmingLanguages.map((lang) => (
                <SkillBar key={lang.name} name={lang.name} percentage={lang.percentage} color="secondary" />
              ))}
            </div>
            
            <div className="mt-6 text-sm text-gray-400">
              <p className="mb-2">Libraries: Pandas, NumPy, Scikit-learn</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {tools.programmingLanguages.map((lang, index) => (
                  <span key={index} className="px-2 py-1 bg-[#111827] text-xs text-gray-300 rounded">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* ML/DL Techniques */}
          <motion.div 
            className="bg-[#1f2937] rounded-xl shadow-xl p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#6d28d9]/20 flex items-center justify-center mr-4">
                <i className="fas fa-network-wired text-[#6d28d9] text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold">ML/DL Techniques</h3>
            </div>
            
            <div className="space-y-4">
              {mlTechniques.map((tech) => (
                <SkillBar key={tech.name} name={tech.name} percentage={tech.percentage} color="primary-purple" />
              ))}
            </div>
            
            <div className="mt-6 text-sm text-gray-400">
              <p className="mb-2">Specialties: CNNs, RNNs, LSTMs, GANs, Transfer Learning</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {tools.mlDlTechniques.slice(0, 6).map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-[#111827] text-xs text-gray-300 rounded">
                    {tech.length > 20 ? tech.substring(0, 20) + "..." : tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* AI & GenAI Tools */}
          <motion.div 
            className="bg-[#1f2937] rounded-xl shadow-xl p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-[#0d9488]/20 flex items-center justify-center mr-4">
                <i className="fas fa-robot text-[#0d9488] text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold">AI & GenAI Tools</h3>
            </div>
            
            <div className="space-y-4">
              {aiTools.map((tool) => (
                <SkillBar key={tool.name} name={tool.name} percentage={tool.percentage} color="accent" />
              ))}
            </div>
            
            <div className="mt-6 text-sm text-gray-400">
              <p className="mb-2">Other Tools: AutoGen, Mistral, Ollama, T5, Crew AI</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {tools.aiGenTools.slice(0, 6).map((tool, index) => (
                  <span key={index} className="px-2 py-1 bg-[#111827] text-xs text-gray-300 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Additional Skills Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="AI Automation"
            icon="fas fa-bolt"
            iconBgColor="bg-[#1e40af]/20"
            iconColor="text-[#3b82f6]"
            skills={tools.aiAutomation}
          />
          
          <SkillCategory 
            title="MLOps & Deployment"
            icon="fas fa-cogs"
            iconBgColor="bg-[#6d28d9]/20"
            iconColor="text-[#6d28d9]"
            skills={tools.mlOps}
          />
          
          <SkillCategory 
            title="Web & Cloud"
            icon="fas fa-cloud"
            iconBgColor="bg-[#0d9488]/20"
            iconColor="text-[#0d9488]"
            skills={tools.webCloud}
          />
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="Databases"
            icon="fas fa-database"
            iconBgColor="bg-[#1e40af]/20"
            iconColor="text-[#3b82f6]"
            skills={tools.databases}
          />
          
          <SkillCategory 
            title="Development Tools"
            icon="fas fa-tools"
            iconBgColor="bg-[#6d28d9]/20"
            iconColor="text-[#6d28d9]"
            skills={tools.devTools}
          />
          
          <SkillCategory 
            title="Data Visualization"
            icon="fas fa-chart-bar"
            iconBgColor="bg-[#0d9488]/20"
            iconColor="text-[#0d9488]"
            skills={tools.visualization}
          />
        </div>
        
        {/* Soft Skills */}
        <motion.div 
          className="mt-12 bg-[#1f2937] rounded-xl shadow-xl p-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-5">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1e40af]/20 to-[#6d28d9]/20 flex items-center justify-center mr-4">
              <i className="fas fa-user-friends text-gradient-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold">Soft Skills</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
            {tools.softSkills.map((skill, index) => (
              <span key={index} className="px-3 py-2 bg-[#111827] text-center text-gray-300 rounded-lg hover:bg-[#111827]/80 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
        
        {/* Tools Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {toolGridItems.map((item, index) => (
            <ToolGridItem 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
