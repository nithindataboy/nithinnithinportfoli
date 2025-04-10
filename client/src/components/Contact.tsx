import { useState } from "react";
import { motion } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const ContactItem = ({ icon, title, content, link }: { icon: string, title: string, content: string, link: string }) => {
  return (
    <motion.div 
      className="bg-[#111827] rounded-xl shadow-xl p-6 flex flex-col items-center text-center"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`w-16 h-16 rounded-full bg-${icon === "fas fa-envelope" ? "[#1e40af]" : icon === "fab fa-linkedin-in" ? "[#6d28d9]" : "[#0d9488]"}/20 flex items-center justify-center mb-4`}>
        <i className={`${icon} text-${icon === "fas fa-envelope" ? "[#1e40af]" : icon === "fab fa-linkedin-in" ? "[#6d28d9]" : "[#0d9488]"} text-2xl`}></i>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <a 
        href={link} 
        target={link.startsWith("mailto") ? undefined : "_blank"} 
        rel={link.startsWith("mailto") ? undefined : "noreferrer"} 
        className={`text-gray-300 hover:text-${icon === "fas fa-envelope" ? "[#3b82f6]" : icon === "fab fa-linkedin-in" ? "[#6d28d9]" : "[#0d9488]"} transition-colors`}
      >
        {content}
      </a>
    </motion.div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real implementation, we would send the form data to the server
      // await apiRequest("POST", "/api/contact", formData);
      
      // For now, just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message! I will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#1f2937]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Me</h2>
          <div className="section-title-underline"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Interested in collaborating or have questions? Let's connect!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ContactItem 
            icon="fas fa-envelope" 
            title="Email" 
            content="nithinpatel2025@gmail.com" 
            link="mailto:nithinpatel2025@gmail.com" 
          />
          
          <ContactItem 
            icon="fab fa-linkedin-in" 
            title="LinkedIn" 
            content="Connect on LinkedIn" 
            link="https://linkedin.com" 
          />
          
          <ContactItem 
            icon="fab fa-github" 
            title="GitHub" 
            content="View My Projects" 
            link="https://github.com" 
          />
          
          <ContactItem 
            icon="fas fa-phone" 
            title="Phone" 
            content="+91 7981994870" 
            link="tel:+917981994870" 
          />
        </div>
        
        {/* Contact Form */}
        <motion.div 
          className="max-w-2xl mx-auto mt-12 bg-[#111827] rounded-xl shadow-xl p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Send Me a Message</h3>
          
          <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#1f2937] border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:border-[#3b82f6] focus:outline-none"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#1f2937] border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:border-[#3b82f6] focus:outline-none"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-[#1f2937] border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:border-[#3b82f6] focus:outline-none"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-[#1f2937] border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:border-[#3b82f6] focus:outline-none"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 primary-gradient-btn rounded-lg font-medium transition-all flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Send Message"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
