import { motion } from "framer-motion"
import { Download, Eye, FileText, GraduationCap, Briefcase, Award } from "lucide-react"
import { Button } from "./ui/button"

const resumeHighlights = [
  {
    icon: GraduationCap,
    title: "Education",
    items: ["B.Tech Computer Science Engineering", "CGPA: 9.2/10 (Current)", "Expected Graduation: 2025"],
  },
  {
    icon: Briefcase,
    title: "Experience",
    items: [
      "Software Development Intern - TechCorp (Summer 2024)",
      "Full Stack Developer - College Tech Society",
      "Freelance Web Developer (2023-Present)",
    ],
  },
  {
    icon: Award,
    title: "Certifications",
    items: ["AWS Cloud Practitioner", "Google Cloud Associate", "Meta Frontend Developer Certificate"],
  },
]

export function ResumeSection() {
  const handleDownload = () => {
    // In a real app, this would trigger a download
    console.log("[v0] Resume download triggered")
  }

  const handlePreview = () => {
    // In a real app, this would open a preview modal
    console.log("[v0] Resume preview triggered")
  }

  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-green-400 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-green-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border-2 border-green-400 rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-green-400">Resume</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my journey as a B.Tech student and aspiring software engineer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleDownload}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button
              onClick={handlePreview}
              variant="outline"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 px-8 py-3 text-lg font-semibold group bg-transparent"
            >
              <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Preview Resume
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resumeHighlights.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-400/30 transition-colors">
                  <section.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-slate-300 flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
        >
          <div className="flex items-center justify-center mb-6">
            <FileText className="w-16 h-16 text-green-400 mr-4" />
            <div>
              <h3 className="text-2xl font-bold text-white">Professional Resume</h3>
              <p className="text-slate-300">Last updated: December 2024</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="text-green-400 font-semibold mb-2">Technical Skills</h4>
              <p className="text-slate-300 mb-4">
                JavaScript, TypeScript, React, Node.js, Python, Java, SQL, MongoDB, AWS, Docker, Git
              </p>

              <h4 className="text-green-400 font-semibold mb-2">Key Projects</h4>
              <p className="text-slate-300">
                E-commerce platform, AI chatbot, Real-time collaboration tool, Mobile expense tracker
              </p>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-2">Achievements</h4>
              <p className="text-slate-300 mb-4">
                Dean's List, Hackathon Winner, Open Source Contributor, Research Publication
              </p>

              <h4 className="text-green-400 font-semibold mb-2">Languages</h4>
              <p className="text-slate-300">English (Fluent), Hindi (Native), Spanish (Intermediate)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
