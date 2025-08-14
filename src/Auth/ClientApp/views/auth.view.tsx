import { useEffect } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';

import { LocalCache } from 'rosie/core';
import { AUTH_TOKEN, AuthUser, AuthUserModel, verifyAuthUser } from 'venus/core';

export function AuthView() {
  const [searchParams] = useSearchParams(),
        navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');

    console.log(code);

    if (code) getAuthUser(code);
  }, [])

  async function getAuthUser(code: string) {
    const user = await verifyAuthUser<AuthUser>(code);

    if (user) {
      LocalCache.set(AUTH_TOKEN, user.token);
      AuthUserModel.load();
      navigate('/home');
    }
  }

  return null;
}