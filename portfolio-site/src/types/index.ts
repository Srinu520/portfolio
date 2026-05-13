export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  clientIndustry: string;
  problem: string;
  solution: string;
  result: string;
  role: string;
  technologies: string[];
  highlights: string[];
  image: string;
  link?: string;
  live?: string;
  source?: string;
}

