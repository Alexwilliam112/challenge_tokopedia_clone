import { parseCookies } from 'nookies';

export const getUsernameFromCookies = (ctx?: any) => {
  const cookies = parseCookies(ctx);
  return cookies.username || null;
};
