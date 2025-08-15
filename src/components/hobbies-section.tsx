"use client"
import { motion } from "framer-motion"
import { Gamepad2, Music, Camera, Book, Dumbbell, Code } from "lucide-react"

const hobbies = [
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Strategy games and competitive esports - sharpens problem-solving skills",
    image: "/placeholder.svg?height=200&width=300",
    skills: ["Strategic thinking", "Quick decision making", "Team coordination"],
  },
  {
    icon: Music,
    title: "Music Production",
    description: "Creating beats and electronic music using FL Studio and Ableton",
    image: "/placeholder.svg?height=200&width=300",
    skills: ["Creativity", "Audio engineering", "Pattern recognition"],
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and experimenting with digital art and photo editing",
    image: "/placeholder.svg?height=200&width=300",
    skills: ["Visual composition", "Adobe Creative Suite", "Attention to detail"],
  },
  {
    icon: Book,
    title: "Tech Reading",
    description: "Always learning - from sci-fi novels to technical documentation",
    image: "/placeholder.svg?height=200&width=300",
    skills: ["Continuous learning", "Research skills", "Knowledge synthesis"],
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Regular gym sessions and outdoor sports - keeps the mind sharp",
    image: "/placeholder.svg?height=200&width=300",
    skills: ["Discipline", "Goal setting", "Physical endurance"],
  },
  {
    icon: Code,
    title: "Side Projects",
    description: "Building random apps and experimenting with new technologies",
    image: "/placeholder.svg?height=200&width=300",
    skills: ["Innovation", "Full-stack development", "Problem solving"],
  },
]

export function HobbiesSection() {
  return (
    <section id="hobbies" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Beyond <span className="text-green-400">Coding</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Like a well-rounded athlete, I believe in developing skills both on and off the field
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-green-400/50 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hobby.image || "/placeholder.svg"}
                  alt={hobby.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-green-400/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <hobby.icon className="w-6 h-6 text-green-400" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {hobby.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{hobby.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hobby.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
