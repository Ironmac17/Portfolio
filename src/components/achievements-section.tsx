"use client"
import { motion } from "framer-motion"
import { Trophy, Award, Star, Target, Zap, Medal, Users, Briefcase } from "lucide-react"

const achievements = [
  {
    icon: Users,
    title: "SATURNALIA'24 Cultural Fest",
    description:
      "Core Member – Led sponsorship outreach securing funds from local businesses, managed on-ground operations, and collaborated with vendors, artists, and stakeholders.",
    year: "Oct–Nov 2024",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: Target,
    title: "URJA'25 Sports Fest",
    description:
      "Executive Committee Member – Secured sponsorships, managed logistics and operations, and mentored juniors in marketing and outreach.",
    year: "Dec 2024 – Feb 2025",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Award,
    title: "JP Morgan Code for Good’25",
    description:
      "Selected for Code for Good 2025 by JPMorgan Chase from 50,000+ applicants, recognizing top student tech talent across India.",
    year: "2025",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Trophy,
    title: "Academic Excellence",
    description: "Maintained 9.3 CGPA across 4 semesters, consistently ranking among the top performers.",
    year: "2022–2025",
    color: "from-yellow-400 to-yellow-600",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & <span className="text-green-400">Milestones</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Like scoring goals in football, every achievement marks progress in my tech journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-400/50 transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <achievement.icon className="w-8 h-8 text-white" />
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {achievement.title}
                </h3>
                <span className="text-sm text-green-400 font-semibold bg-green-400/10 px-2 py-1 rounded">
                  {achievement.year}
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed">{achievement.description}</p>

              {/* Animated trophy effect */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
