interface CV {
  basics: {
    name: string;
    label: string;
    // ... other basic fields
  };
  work: Array<{
    name: string;
    position: string;
    // ... other work fields
  }>;
  skills: Array<{
    name: string;
  }>;
}

declare module '@cv' {
  const content: CV;
  export default content;
} 