declare namespace NodeJS {
    interface ProcessEnv {
        AUTH_SECRET: string;
        DSN_PROD: string;
        DSN_DEV?: string;
    }
  }