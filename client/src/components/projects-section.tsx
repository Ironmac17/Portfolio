import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";


const projects = [
  {
    id: 1,
    title: "Job Portal",
    description:
      "Full-stack job portal solution with React, Node.js, Express ,Clerk",
    image: "/assets/jobportal.jpg",
    tech: ["React", "Node.js", "MongoDB", "Express", "Clerk"],
    github: "https://github.com/Ironmac17/JobPortal",
    live: "job-portal-silk-phi.vercel.app",
  },
  {
    id: 2,
    title: "PhantomPost",
    description: "Anonymous social media platform with optional username visibility and real-time messaging.",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Node.js", "TypeScript", "MongoDB", "Socket.io"],
    github: "https://github.com/Ironmac17/PhantomPost",
    live: "https://github.com/Ironmac17/PhantomPost",
  },
  // {
  //   id: 3,
  //   title: "AI Chat Application",
  //   description:
  //     "Intelligent chatbot with natural language processing capabilities",
  //   image: "/placeholder.svg?height=300&width=400",
  //   tech: ["React", "Python", "OpenAI", "FastAPI"],
  //   github: "#",
  //   live: "#",
  // },
  // {
  //   id: 4,
  //   title: "Fitness Tracker",
  //   description: "Mobile-first fitness tracking app with workout analytics",
  //   image: "/placeholder.svg?height=300&width=400",
  //   tech: ["React Native", "Firebase", "Chart.js"],
  //   github: "#",
  //   live: "#",
  // },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                onClick={() =>
                  setSelectedProject(
                    selectedProject === project.id ? null : project.id
                  )
                }
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={
                      selectedProject === project.id
                        ? { scaleY: 1, opacity: 1 }
                        : { scaleY: 0, opacity: 0 }
                    }
                    style={{ transformOrigin: "top" }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-2 bg-transparent"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
