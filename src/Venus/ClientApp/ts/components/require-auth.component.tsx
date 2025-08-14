import { LocalCache } from 'rosie/core';
import { AUTH_TOKEN, redirectToLogin } from 'venus/core';

export function RequireAuth({ component: Component, title = '' }) {
  if (!LocalCache.get(AUTH_TOKEN)) redirectToLogin();

  document.title = title ? `${title} | Venus` : 'Venus';

  return <Component />;
}