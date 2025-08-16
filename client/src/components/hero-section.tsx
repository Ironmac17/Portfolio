import { motion } from "framer-motion";

import { Button } from "../components/ui/button";
import { ChevronDown, Code, Zap, Trophy, Target } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />

      {/* Stadium Floodlights */}
      <motion.div
        className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute top-0 right-1/4 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
      />

      {/* Interactive Football */}
      <motion.div
        className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-2xl cursor-pointer"
        animate={{
          rotate: 360,
          scale: hoveredElement === "football" ? [1.3, 1.5, 1.3] : [1, 1.3, 1],
          x: [0, 30, -10, 0],
          y: [0, -20, 10, 0],
        }}
        transition={{
          rotate: {
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
          scale: {
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          x: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          y: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.4, rotate: 720 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setHoveredElement("football")}
        onHoverEnd={() => setHoveredElement(null)}
        style={{
          boxShadow:
            hoveredElement === "football"
              ? "0 0 60px rgba(251, 146, 60, 0.8), inset 0 0 30px rgba(255, 255, 255, 0.3)"
              : "0 0 40px rgba(251, 146, 60, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Enhanced football pattern */}
        <div className="absolute inset-3 border-2 border-white rounded-full opacity-80" />
        <div className="absolute top-1/2 left-1/2 w-10 h-1 bg-white transform -translate-x-1/2 -translate-y-1/2 rounded" />
        <div className="absolute top-1/2 left-1/2 w-1 h-10 bg-white transform -translate-x-1/2 -translate-y-1/2 rounded" />
        <div className="absolute inset-4 border border-white/50 rounded-full" />
      </motion.div>

      {/* Interactive Cricket Ball */}
      <motion.div
        className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full shadow-2xl cursor-pointer"
        animate={{
          rotate: -360,
          scale:
            hoveredElement === "cricket" ? [1.2, 1.4, 1.2] : [1, 0.8, 1.2, 1],
          x: [0, -25, 15, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{
          rotate: {
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
          scale: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          x: {
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          y: {
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.3, rotate: -720 }}
        whileTap={{ scale: 0.8 }}
        onHoverStart={() => setHoveredElement("cricket")}
        onHoverEnd={() => setHoveredElement(null)}
        style={{
          boxShadow:
            hoveredElement === "cricket"
              ? "0 0 50px rgba(220, 38, 38, 0.7), inset 0 0 25px rgba(255, 255, 255, 0.2)"
              : "0 0 30px rgba(220, 38, 38, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Enhanced cricket ball seam */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white transform -translate-y-1/2 rounded" />
        <div className="absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-white/80 rounded" />
        <div className="absolute bottom-1/3 left-1/4 right-1/4 h-0.5 bg-white/80 rounded" />
        <div className="absolute top-1/4 left-1/3 right-1/3 h-0.5 bg-white/60 rounded transform rotate-12" />
        <div className="absolute bottom-1/4 left-1/3 right-1/3 h-0.5 bg-white/60 rounded transform -rotate-12" />
      </motion.div>

      {/* Interactive Tech Icons */}
      <motion.div
        className="absolute top-1/3 left-20 w-16 h-16 bg-emerald-400/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-emerald-400/30 cursor-pointer"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 15, -15, 0],
          scale: hoveredElement === "code" ? [1.1, 1.3, 1.1] : [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.4,
          rotate: 360,
          backgroundColor: "rgba(16, 185, 129, 0.4)",
        }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setHoveredElement("code")}
        onHoverEnd={() => setHoveredElement(null)}
      >
        <Code className="w-8 h-8 text-emerald-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-32 w-16 h-16 bg-blue-400/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-blue-400/30 cursor-pointer"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -20, 20, 0],
          scale: hoveredElement === "zap" ? [1.2, 1.4, 1.2] : [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        whileHover={{
          scale: 1.4,
          rotate: -360,
          backgroundColor: "rgba(59, 130, 246, 0.4)",
        }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setHoveredElement("zap")}
        onHoverEnd={() => setHoveredElement(null)}
      >
        <Zap className="w-8 h-8 text-blue-400" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-10 w-14 h-14 bg-yellow-400/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-yellow-400/30 cursor-pointer"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        whileHover={{
          scale: 1.5,
          rotate: 720,
          backgroundColor: "rgba(250, 204, 21, 0.4)",
        }}
        whileTap={{ scale: 0.8 }}
        onHoverStart={() => setHoveredElement("trophy")}
        onHoverEnd={() => setHoveredElement(null)}
      >
        <Trophy className="w-7 h-7 text-yellow-400" />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-10 w-14 h-14 bg-red-400/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-red-400/30 cursor-pointer"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
        whileHover={{
          scale: 1.5,
          rotate: -720,
          backgroundColor: "rgba(248, 113, 113, 0.4)",
        }}
        whileTap={{ scale: 0.8 }}
        onHoverStart={() => setHoveredElement("target")}
        onHoverEnd={() => setHoveredElement(null)}
      >
        <Target className="w-7 h-7 text-red-400" />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-foreground">Nimish</span>{" "}
            <motion.span
              className="text-primary cursor-pointer"
              animate={{
                textShadow: [
                  "0 0 20px rgba(16, 185, 129, 0.5)",
                  "0 0 40px rgba(16, 185, 129, 0.8)",
                  "0 0 20px rgba(16, 185, 129, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 60px rgba(16, 185, 129, 1)",
              }}
            >
              Agrawal
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building the Future, One Line of Code at a Time
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground/80  max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            B.E. Computer Science Student
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground/80 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Thapar Institute of Engineering & Technology, Patiala
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground/80 mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }} // slightly later delay
          >
            Expected Graduation: 2027
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold relative overflow-hidden"
                onClick={scrollToAbout}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10">Start the Game</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg bg-transparent relative overflow-hidden"
                onClick={() =>
                  document
                    .getElementById("resume")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10">View Stats</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <motion.div
          className="p-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm"
          animate={{
            boxShadow: [
              "0 0 10px rgba(16, 185, 129, 0.3)",
              "0 0 20px rgba(16, 185, 129, 0.6)",
              "0 0 10px rgba(16, 185, 129, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
