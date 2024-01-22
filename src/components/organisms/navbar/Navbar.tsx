import { Component, Match, Switch } from 'solid-js';

import {
    NavbarBrand,
    NavbarLoggedInActions,
    NavbarLoggedOutActions,
} from '@/components/molecules';

import { NavbarProps } from './Navbar.types';

const Navbar: Component<NavbarProps> = (props) => (
    <nav class="container-fluid">
        <NavbarBrand />

        <Switch>
            <Match when={props.type === 'loggedIn' ? props : undefined}>
                {(props) => (
                    <NavbarLoggedInActions
                        onClickLogout={props().onClickLogout}
                    />
                )}
            </Match>
            <Match when={props.type === 'loggedOut' ? props : undefined}>
                {(props) => (
                    <NavbarLoggedOutActions
                        onClickLogin={props().onClickLogin}
                    />
                )}
            </Match>
        </Switch>
    </nav>
);

export default Navbar;
