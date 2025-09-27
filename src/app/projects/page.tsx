"use client";

import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Play } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  codeLink?: string;
  featured?: boolean;
  image?: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveLink: "#",
    codeLink: "#",
    featured: true,
  },
  {
    title: "Task Management Dashboard",
    description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tags: ["React", "TypeScript", "Firebase", "Material-UI"],
    liveLink: "#",
    codeLink: "#",
    featured: true,
  },
  {
    title: "Weather Forecast App",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tags: ["React", "OpenWeather API", "Chart.js", "PWA"],
    liveLink: "#",
    codeLink: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern web development and creative problem-solving.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className={`bg-card rounded-lg overflow-hidden ${project.featured ? 'border border-primary/20' : ''}`}>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      {project.featured && (
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.liveLink && (
                      <Button className="bg-gradient-primary hover:opacity-90">
                        <Play className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.codeLink && (
                      <Button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                        <Code className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent px-8 py-3 text-lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}



