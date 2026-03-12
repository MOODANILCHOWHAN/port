export type UserPlan = "open" | "plus" | "pro";
export type DesignId = "O1"|"O2"|"O3"|"P1"|"P2"|"P3"|"P4"|"P5"|"R1"|"R2"|"R3";

export interface User {
  _id: string;
  name: string;
  email: string;
  plan: UserPlan;
  planExpiry?: string;
  avatar?: string;
}

export interface LoginPayload    { email: string; password: string; }
export interface RegisterPayload { name: string; email: string; password: string; }

export interface AuthResponse {
  success: boolean;
  token: string;
  user: User;
}

export interface EducationItem  { degree: string; school: string; year: string; grade: string; }
export interface ExperienceItem { title: string; company: string; duration: string; desc: string; }
export interface ProjectItem    { name: string; desc: string; tech: string; link: string; }

export interface PortfolioData {
  name: string;       role: string;
  email: string;      phone: string;
  location: string;   linkedin: string;
  bio: string;
  techSkills: string[];
  softSkills: string[];
  education:  EducationItem[];
  experience: ExperienceItem[];
  projects:   ProjectItem[];
  github: string;     website: string;
  certs: string;      langs: string;
}

export interface Portfolio extends PortfolioData {
  _id: string;
  userId: string;
  designId: DesignId;
  tier: UserPlan;
  designName: string;
  slug: string;
  views: number;
  isPublic: boolean;
  publishedAt: string;
}

export interface DesignMeta {
  id: DesignId;
  name: string;
  tier: UserPlan;
  tags: string[];
  description: string;
  animated: boolean;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: { field: string; message: string }[];
}
