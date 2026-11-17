export interface MediaAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SolutionContent {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  keyword: string;
  directAnswer: string;
  image: MediaAsset;
  howItWorks: string[];
  whenToChoose: string[];
  advantages: string[];
  limitations: string[];
  lgpdNote?: string;
  integrations: string[];
  installationSteps: { step: string; title: string; description: string }[];
  maintenanceAndSupport: string[];
  faqs: FAQItem[];
  relatedSolutions: string[];
  relatedSegments: string[];
  relatedCities: string[];
  relatedServices?: string[];
  whatsappContext: string;
}

export interface SegmentContent {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  keyword: string;
  directAnswer: string;
  image: MediaAsset;
  typicalProblems: string[];
  idealSolutions: { solutionSlug: string; title: string; reason: string }[];
  projectArchitecture: string[];
  faqs: FAQItem[];
  relatedSolutions: string[];
  relatedSegments: string[];
  whatsappContext: string;
}

export interface CityContent {
  slug: string;
  name: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  keyword: string;
  directAnswer: string;
  image: MediaAsset;
  localCharacteristics: string;
  popularSolutions: string[];
  serviceLogistics: string;
  faqs: FAQItem[];
  whatsappContext: string;
}

export interface ServiceContent {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  keyword: string;
  directAnswer: string;
  image: MediaAsset;
  scope: string[];
  productInstallations?: { label: string; to: string; description: string }[];
  diagnosticCommonIssues?: { symptom: string; cause: string; fix: string }[];
  processSteps: { step: string; title: string; description: string }[];
  faqs: FAQItem[];
  relatedSolutions: string[];
  relatedServices: string[];
  whatsappContext: string;
}

export interface BlogPostSection {
  heading: string;
  subsections?: {
    heading: string;
    paragraphs: string[];
  }[];
  paragraphs: string[];
}

export interface BlogPostContent {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  author: string;
  publishedDate: string;
  readTime: string;
  summary: string;
  sections: BlogPostSection[];
  faqs: FAQItem[];
  whatsappContext: string;
  internalLinks: { text: string; url: string; context: string }[];
}
