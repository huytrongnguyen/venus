import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LocalCache } from 'rosie';
import { AUTH_TOKEN, AuthUser, AuthUserModel, verifyAuthUser } from 'venus/core';

export function Auth() {
  const location = useLocation(),
        navigate = useNavigate();

  useEffect(() => {
    const { token } = location.search.decodeQS<{ token: string }>();console.log({token:location});

    if (token) getAuthUser(token);
  }, [])

  async function getAuthUser(token: string) {
    const user = await verifyAuthUser<AuthUser>(token);

    if (user) {
      LocalCache.set(AUTH_TOKEN, user.token);
      AuthUserModel.load();
      navigate('/');
    }
  }

  return null;
}