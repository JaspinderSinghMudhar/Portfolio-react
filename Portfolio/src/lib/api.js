const configuredApiUrl = import.meta.env.VITE_API_URL?.trim().replace(/\/+$/, '');

export const API_BASE_URL = import.meta.env.PROD
  ? ''
  : configuredApiUrl || 'http://localhost:3000';
