export type SocialLink = {
  label: string;
  href: string;
  description: string;
};

export type SectionItem = {
  title: string;
  description: string;
};

export type CaseStudy = {
  number: string;
  eyebrow: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  impact: string;
  challenges: string;
  learnings: string;
};

export type Experience = {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  technologies: string[];
};
