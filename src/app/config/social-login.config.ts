import { AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('135231573260-nff5u094u3c4cmeqsogjiqlbjpuucbnu.apps.googleusercontent.com'),
  },
]);
export function provideSocialLogin(): AuthServiceConfig {
  return config;
}
