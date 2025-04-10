// src/types/custom-card-helpers.d.ts
declare module 'custom-card-helpers' {
    export interface HomeAssistant {
      states: Record<string, { state: string; attributes: Record<string, any> }>;
      config: Record<string, any>;
      // Add more as needed
    }
  }
  