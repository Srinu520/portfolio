export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  technologies: string[];
  highlights: string[];
  image: string;
  link?: string;
  live?: string;
  source?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}
