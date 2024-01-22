import { Component } from 'solid-js';
import { NavbarLink } from '@/components/atoms';
import { AppRoutes } from '@/constants/app-routes';
import { NavbarLoggedInActionsProps } from './NavbarLoggedInActions.types';

const NavbarLoggedInActions: Component<NavbarLoggedInActionsProps> = (
    props: NavbarLoggedInActionsProps,
) => (
    <ul>
        <NavbarLink url={AppRoutes.GROUPS}>Groups</NavbarLink>
        <NavbarLink url={AppRoutes.PROFILE}>Profile</NavbarLink>
        <NavbarLink
            url={AppRoutes.ROOT}
            variant="secondary"
            onClick={props.onClickLogout}
        >
            Logout
        </NavbarLink>
    </ul>
);

export default NavbarLoggedInActions;
