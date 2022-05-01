import { credentials } from './credentials';

export const environment = {
  production: true,
  oauth: {
    baseUrl: 'http://localhost:5000',
    clientId: credentials.oauth.clientId
  },
  storage: {
    prefix: '_oidc.core'
  }
};
