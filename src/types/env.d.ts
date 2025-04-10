interface ImportMetaEnv {
    DEV: boolean;
    PROD: boolean;
    [key: string]: any;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  