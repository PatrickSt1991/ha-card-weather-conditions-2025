// src/types/custom-card-helpers.d.ts
declare module 'custom-card-helpers' {
    export interface HomeAssistant {
      states: Record<string, { state: string; attributes: Record<string, any> }>;
      config: Record<string, any>;
      // Add more as needed
    }
  }
  
declare module '*.svg?raw' {
  const content: string;
  export default content;
}

declare module '*.json?raw' {
  const content: string;
  export default content;
}

// For JPG files (to treat them as URLs)
declare module '*.jpg' {
  const content: string; // This treats JPG as a URL (string path)
  export default content;
}