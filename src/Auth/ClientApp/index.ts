import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// import { LocalCache } from 'rosie';
// import { JWT_TOKEN, verifyAuthToken } from 'mdm/shared';
// import { AuthUser, AuthUserModel } from 'mdm';

export function Auth() {
  const location = useLocation(),
        navigate = useNavigate();

  useEffect(() => {
    // const { token } = location.search.decodeQS<{ token: string }>();

    // if (token) getAuthUser(token);
  }, [])

  async function getAuthUser(token: string) {
    // const user = await verifyAuthToken<AuthUser>(token);

    // if (user) {
    //   LocalCache.set(JWT_TOKEN, user.token);
    //   AuthUserModel.load();
    //   navigate('/home');
    // }
  }

  return null;
}