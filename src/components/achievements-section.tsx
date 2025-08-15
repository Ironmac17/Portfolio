"use client"
import { motion } from "framer-motion"
import { Trophy, Award, Star, Target, Zap, Medal } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Dean's List",
    description: "Maintained 9.2+ CGPA for 4 consecutive semesters",
    year: "2022-2024",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: Award,
    title: "Hackathon Winner",
    description: "1st Place in TechFest 2024 - Built AI-powered study assistant",
    year: "2024",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Star,
    title: "Open Source Contributor",
    description: "500+ contributions on GitHub, maintained 3 popular repositories",
    year: "2023-2024",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Target,
    title: "Coding Competition",
    description: "Top 50 in Google Code Jam, solved 200+ LeetCode problems",
    year: "2023",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Zap,
    title: "Technical Lead",
    description: "Led development team of 8 students in college tech society",
    year: "2023-2024",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Medal,
    title: "Research Paper",
    description: "Published paper on ML algorithms in IEEE conference",
    year: "2024",
    color: "from-red-400 to-red-600",
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
