"use client";

import { Trophy, Star, Users, Award, Target, Zap, BookOpen } from 'lucide-react';

type Achievement = {
  title: string;
  description: string;
  category: string;
  date?: string;
  status?: string;
  icon: React.ReactNode;
};

const summaryStats = [
  { number: "50+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
  { number: "1.2K+", label: "GitHub Stars", icon: <Star className="w-6 h-6" /> },
  { number: "500+", label: "Community Contributions", icon: <Users className="w-6 h-6" /> },
  { number: "8", label: "Certifications", icon: <Award className="w-6 h-6" /> },
];

const achievements: Achievement[] = [
  {
    title: "Best Developer Award 2023",
    description: "Recognized as the top performing developer at TechCorp for outstanding contributions to product development and team leadership.",
    category: "Professional",
    date: "December 2023",
    icon: <Trophy className="w-6 h-6" />
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to 15+ open source projects with over 1,000 GitHub stars and 500+ contributions in the past year.",
    category: "Community",
    status: "Ongoing",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Hackathon Winner",
    description: "First place in the National Web Development Hackathon for creating an innovative accessibility tool in 48 hours.",
    category: "Competition",
    date: "August 2023",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Project Delivery Excellence",
    description: "Successfully delivered 20+ projects under budget, maintaining a 98% client satisfaction rate.",
    category: "Professional",
    date: "2023",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Tech Conference Speaker",
    description: "Presented &apos;Modern React Patterns&apos; to an audience of 500+ developers at the National Web Development Conference.",
    category: "Speaking",
    date: "October 2023",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Certified Solutions Architect",
    description: "Achieved AWS and Google Cloud Professional Developer certifications.",
    category: "Certification",
    date: "2023",
    icon: <BookOpen className="w-6 h-6" />
  },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Achievements
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Milestones that reflect my commitment to excellence, continuous learning, and contribution to the developer community.
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {summaryStats.map((stat, index) => (
              <div key={index} className="bg-card p-6 rounded-lg text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Detailed Achievements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-card p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg flex-shrink-0">
                    <div className="text-white">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                        {achievement.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      {achievement.description}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      {achievement.date || achievement.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



