"use client";

import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !subject || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    // Placeholder success without backend
    setStatus("Thanks! Your message has been recorded locally.");
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h2>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium">Email</div>
                    <div className="text-muted-foreground">agamhora481@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-foreground font-medium">Location</div>
                    <div className="text-muted-foreground">San Francisco, CA</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:agamhora481@gmail.com"
                    className="flex items-center justify-center w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input 
                      id="name" 
                      name="name" 
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input 
                      id="email" 
                      name="email" 
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input 
                    id="subject" 
                    name="subject" 
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6}
                    placeholder="Tell me about your project or just say hello..."
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                {status && (
                  <p className="text-sm text-muted-foreground text-center">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



