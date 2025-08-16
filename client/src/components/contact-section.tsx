import React, { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Code,
  Send,
  CheckCircle,
} from "lucide-react";

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // important to prevent page reload
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "nimish4agrawal@gmail.com",
      href: "mailto:nimish4agrawal@gmail.com",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9413021456",
      href: "tel:+919413021456",
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to bring your ideas to life? Like assembling the perfect team,
            let's combine our skills to create something extraordinary.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Let's work together section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ready to bring your ideas to life? Like assembling the perfect
                team, let's combine our skills to create something
                extraordinary.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 transform hover:translate-x-2 group"
                >
                  <div
                    className={`w-12 h-12 ${method.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <method.icon className={`w-6 h-6 ${method.iconColor}`} />
                  </div>
                  <div>
                    <div className="font-semibold">{method.label}</div>
                    <div className="text-muted-foreground">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/Ironmac17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-card border border-border hover:border-transparent flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:bg-gray-900 hover:shadow-lg hover:shadow-gray-900/30 group"
                  title="GitHub"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nimish-agrawal-31388b293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-card border border-border hover:border-transparent flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30 group"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </a>

                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/IronMac17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-card border border-border hover:border-transparent flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30 group"
                  title="LeetCode"
                >
                  <Code className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Send me a message</h3>
              <p className="text-muted-foreground">
                I'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden ${
                  isSubmitted
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : isSubmitting
                    ? "bg-gray-500 text-gray-200 cursor-not-allowed"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2025 Nimish Agrawal. Built with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
export { ContactSection };
