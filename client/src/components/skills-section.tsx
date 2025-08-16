"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
} from "react-icons/si";

const skills = [
  {
    name: "C/C++",
    level: 95,
    icon: <SiCplusplus className="text-blue-500 text-3xl" />,
  },
  {
    name: "Javascript",
    level: 90,
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
  },
  {
    name: "React",
    level: 90,
    icon: <SiReact className="text-cyan-400 text-3xl" />,
  },
  {
    name: "UI/UX",
    level: 90,
    icon: <SiFigma className="text-pink-500 text-3xl" />,
  },
  {
    name: "Node.js",
    level: 85,
    icon: <SiNodedotjs className="text-green-500 text-3xl" />,
  },
  {
    name: "Express",
    level: 80,
    icon: <SiExpress className="text-gray-400 text-3xl" />,
  },
  {
    name: "Python",
    level: 80,
    icon: <SiPython className="text-yellow-500 text-3xl" />,
  },
  {
    name: "MongoDB",
    level: 78,
    icon: <SiMongodb className="text-green-600 text-3xl" />,
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Technical <span className="text-primary">Skills</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.02, delay: 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
                }}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-center w-full">
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {skill.icon}
                  </div>

                  <h3 className="font-semibold text-foreground mb-3">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full bg-[#1e293b] rounded-full h-3 mb-2 overflow-hidden">
                    <motion.div
                      className="h-3 rounded-full bg-[#1e293b]"
                      initial={{ width: 0 }}
                      animate={
                        isInView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      style={{
                        maxWidth: "100%",
                        background:
                          "linear-gradient(to right, #1e293b, #22c55e)", // dark -> green at end
                      }}
                    />
                  </div>

                  {/* Percentage */}
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
