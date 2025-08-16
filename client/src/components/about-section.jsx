import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <span className="text-primary">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="w-96 h-96 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=350&width=350"
                      alt="Profile"
                      className="w-88 h-88 rounded-full object-cover"
                    />
                  </div>
                </div>
                <motion.div
                  className="absolute -top-6 -right-6 w-20 h-20 bg-primary rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <span className="text-3xl">⚽</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-10"
            >
              <p className="text-xl leading-relaxed text-muted-foreground">
                Like a strategist on the field,
                <span className="text-primary font-semibold">
                  {" "}
                  I approach engineering with creativity, logic, and precision.
                </span>{" "}
                Frontend development is where I turn ideas into interactive,
                user-friendly experiences, powered by clean and efficient code.
                My journey in Computer Engineering has also fueled a strong
                interest in AI/ML, where I explore how intelligent systems can
                make technology smarter and more impactful. With a keen eye for
                UI/UX design, I ensure that everything I build doesn’t just
                work—it feels intuitive and engaging. Driven by curiosity and
                hands-on projects, I focus on learning, experimenting, and
                crafting solutions that merge functionality with experience.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
