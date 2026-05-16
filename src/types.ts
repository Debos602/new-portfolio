export type ApiResponse<T> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
};

export type Project = {
  _id: string;
  title: string;
  image?: string;
  description?: string;
  githubLinkFrontend?: string;
  githubLinkBackend?: string;
  liveLink?: string;
  technologies: string[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type Skill = {
  _id: string;
  category: string;
  name: string;
  proficiency?: number;
  icon?: string;
  level?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type TResponsibility = {
  icon?: string;
  details: string;
};

export type TExperience = {
  _id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate?: string;
  isPresent: boolean;
  responsibilities: TResponsibility[];
  technologies: string[];
  order?: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type StatsData = {
  codeQuality: string;
  commitsPerYear: string;
  projects?: number | string;
  projectsDone?: string;
  uptime: string;
};
