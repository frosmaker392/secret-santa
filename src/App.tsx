import { Route, Router } from '@solidjs/router';
import { Component, ParentProps, onMount } from 'solid-js';

import { AppTemplate } from './components/templates';
import OAuthCallback from './components/pages/oauth-callback/OAuthCallback';
import { AppRoutes } from './constants/app-routes';
import { Navbar } from './components/organisms';
import { appStore, setAppStore } from './stores/app';
import { NavbarProps } from './components/organisms/navbar/Navbar.types';
import { createOauthLoginUrl, generateRandomId } from './utils';
import { OAUTH_STATE_KEY } from './constants/api';
import { ApiError } from './types/api/error';
import { getCurrentUser, logout } from './services';

const handleLogin = (): void => {
    const state = generateRandomId();

    localStorage.setItem(OAUTH_STATE_KEY, state);

    window.location.href = createOauthLoginUrl(state).toString();
};

const handleLogout = async (): Promise<void> => {
    await logout();

    setAppStore('user', undefined);
};

const AppFrame: Component<ParentProps> = (props) => {
    const navbarProps = (): NavbarProps =>
        appStore.user
            ? {
                  type: 'loggedIn',
                  onClickLogout: handleLogout,
              }
            : {
                  type: 'loggedOut',
                  onClickLogin: handleLogin,
              };

    onMount(async () => {
        try {
            const user = await getCurrentUser();
            setAppStore('user', user);
        } catch (error) {
            if (!(error instanceof ApiError)) {
                console.error(error);
            }
        }
    });

    return (
        <AppTemplate
            navbar={<Navbar {...navbarProps()} />}
            content={props.children}
        />
    );
};

const CallbackPage: Component = () => (
    <AppTemplate
        navbar={<Navbar type="minimal" />}
        content={<OAuthCallback />}
    />
);

const App: Component = () => {
    return (
        <Router>
            <Route path={AppRoutes.ROOT} component={AppFrame} />;
            <Route path={AppRoutes.CALLBACK} component={CallbackPage} />
        </Router>
    );
};

export default App;
