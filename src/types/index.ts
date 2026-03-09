export interface ServiceData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FeatureData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FormData {
  fullName: string;
  email: string;
  revenue: string;
  goals: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}