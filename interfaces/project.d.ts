export interface Project {
  id: string;
  title: string;
  description: string;
  redirectExternal: boolean;
  techStack?: TechStack[]; // Tech stack icon file path
  tags?: string[];
  snapshotUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  demoButtonText?: string;
}

export interface TechStack {
  tech: string;
  devicon?: string;
}
