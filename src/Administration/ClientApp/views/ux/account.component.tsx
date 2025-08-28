import { useEffect, useState } from 'react';
import { LocalCache } from 'rosie-ui';
import { AUTH_TOKEN, AuthUser, AuthUserModel, redirectToLogin } from 'venus/core';

export function Account() {
  const [currentUser, setCurrentUser] = useState({} as AuthUser);

  useEffect(() => {
    const subscription = AuthUserModel.subscribe(user => user && setCurrentUser(user));
    return () => { subscription.unsubscribe() }
  }, []);

  function logout() {
    LocalCache.remove(AUTH_TOKEN);
    redirectToLogin();
  }

  return <>
    <div className="navbar-nav">
      <span>{currentUser.username}</span>
      <span role="button" className="fa fa-sign-out mt-1" onClick={logout} />
    </div>
    {/* <div className="navbar-nav">
      <span role="button" className="nav-link">Login</span>
    </div> */}
  </>
}