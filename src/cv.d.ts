interface CV {
  basics: {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    url: string;
    summary: string[];
    location: {
      address: string;
      postalCode: string;
      city: string;
      countryCode: string;
      region: string;
    };
    profiles: Array<{
      network: string;
      username: string;
      url: string;
    }>;
  };
  work: Array<{
    name: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string | null;
    summary: string;
    highlights: string[];
  }>;
  skills: Array<{
    name: string;
    level: string;
    keywords: string[];
  }>;
  projects: Array<{
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    highlights: string[];
    url: string;
  }>;
}

declare module '@cv' {
  const content: CV;
  export default content;
} 