import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaDribbble, FaBehance, FaGithub, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const socialLinks = [
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaDribbble, href: "#", label: "Dribbble" },
    { icon: FaBehance, href: "#", label: "Behance" },
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaTwitter, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 bg-primary-custom text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-secondary-custom" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:alex@portfolio.com"
                    className="text-white/80 hover:text-secondary-custom transition-colors duration-300"
                  >
                    alex@portfolio.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-secondary-custom" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-white/80 hover:text-secondary-custom transition-colors duration-300"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-secondary-custom" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-white/80">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-white/10 hover:bg-secondary-custom text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary-custom focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary-custom focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary-custom focus:border-transparent transition-all duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary-custom focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary-custom hover:bg-secondary-custom/90 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
