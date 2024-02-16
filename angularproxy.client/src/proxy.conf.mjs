import { env } from 'process';

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7005';

const PROXY_CONFIG = {
  '**/*': {
    target,
    'secure': false,
    'bypass': (req) => req.headers['sec-fetch-dest'] !== 'empty' ? req.url : null
  }
};

export default PROXY_CONFIG;
