"use client";

import { Code, Zap, Palette, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* About Me Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I&apos;m a passionate full-stack developer with 5+ years of experience creating innovative web applications and user experiences that make a difference.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
          </div>

          {/* My Journey Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">My Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Started as a curious computer science student, I&apos;ve evolved into a versatile developer who loves turning complex problems into simple, beautiful solutions. My experience spans from startups to enterprise projects, always focusing on clean code and exceptional user experiences.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community through blog posts and mentoring.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-primary rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Frontend Development */}
              <div className="bg-card p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Frontend Development</h3>
                <p className="text-muted-foreground mb-4">React, TypeScript, Next.js, Tailwind CSS</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Angular'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Development */}
              <div className="bg-card p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Backend Development</h3>
                <p className="text-muted-foreground mb-4">Node.js, Python, Express, MongoDB</p>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* UI/UX Design */}
              <div className="bg-card p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground mb-4">Figma, Adobe XD, Responsive Design</p>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Adobe XD', 'Responsive Design', 'Prototyping', 'User Research'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Collaboration */}
              <div className="bg-card p-6 rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Collaboration</h3>
                <p className="text-muted-foreground mb-4">Git, Agile, Team Leadership</p>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Agile/Scrum', 'Team Leadership', 'Code Review', 'Documentation'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



