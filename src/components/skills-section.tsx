"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "React", level: 95, icon: "⚛️" },
  { name: "TypeScript", level: 90, icon: "📘" },
  { name: "Node.js", level: 88, icon: "🟢" },
  { name: "Next.js", level: 92, icon: "▲" },
  { name: "Python", level: 85, icon: "🐍" },
  { name: "AWS", level: 80, icon: "☁️" },
  { name: "Docker", level: 82, icon: "🐳" },
  { name: "GraphQL", level: 78, icon: "🔗" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
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
            Technical <span className="text-primary">Skills</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -90 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
                }}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{skill.name}</h3>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
