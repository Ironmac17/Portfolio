
import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
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
            Get In <span className="text-primary">Touch</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ready to bring your ideas to life? Like assembling the perfect team, let's combine our skills to
                  create something extraordinary.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">john.smith@example.com</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-muted-foreground">San Francisco, CA</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Your Name" className="bg-card border-border focus:border-primary" required />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-card border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Input placeholder="Subject" className="bg-card border-border focus:border-primary" required />
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    className="bg-card border-border focus:border-primary resize-none"
                    required
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 relative overflow-hidden"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <motion.div className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin-ball" />
                        Sending...
                      </motion.div>
                    ) : isSubmitted ? (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                        ✓ Message Sent!
                      </motion.div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center mt-20 pt-8 border-t border-border"
      >
        <p className="text-muted-foreground">© 2024 John Smith. Built with passion and precision.</p>
      </motion.div>
    </section>
  )
}
