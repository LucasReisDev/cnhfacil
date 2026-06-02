export type CNHServiceType = 'PRIMEIRA_CNH' | 'ADICAO_CATEGORIA' | 'RENOVACAO' | 'REGULARIZACAO';

export interface CNHOption {
  id: CNHServiceType;
  title: string;
  description: string;
  badge: string;
  estimatedDays: string;
}

export type LicenseCategory = 'A' | 'B' | 'AB' | 'C' | 'D' | 'E';

export interface LeadData {
  name: string;
  phone: string;
  service: CNHServiceType;
  category: LicenseCategory;
  state: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
