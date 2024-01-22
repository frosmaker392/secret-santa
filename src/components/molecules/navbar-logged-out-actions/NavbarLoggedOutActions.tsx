import { Component } from 'solid-js';

import { NavbarButton } from '@/components/atoms';

import { NavbarLoggedOutActionsProps } from './NavbarLoggedOutActions.types';

const NavbarLoggedOutActions: Component<NavbarLoggedOutActionsProps> = (
    props,
) => (
    <ul>
        <NavbarButton onClick={() => props.onClickLogin()}>Login</NavbarButton>
    </ul>
);

export default NavbarLoggedOutActions;
