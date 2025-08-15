import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <span className="text-primary">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Profile"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <span className="text-2xl">⚽</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Like a dedicated athlete training for the championship, I approach development with
                <span className="text-primary font-semibold">
                  {" "}
                  discipline, precision, and relentless pursuit of excellence
                </span>
                . Every line of code is crafted with the same attention to detail that separates good players from great
                ones.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With <span className="text-secondary font-semibold">5+ years</span> of experience in full-stack
                development, I've mastered the art of building scalable applications that perform under pressure. My
                toolkit includes React, Node.js, TypeScript, and modern cloud technologies.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-background rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border border-secondary/20">
                  <div className="text-2xl font-bold text-secondary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
