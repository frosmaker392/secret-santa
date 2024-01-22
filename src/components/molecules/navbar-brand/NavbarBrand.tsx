import { Component } from 'solid-js';

import { NavbarLink } from '@/components/atoms';
import { AppRoutes } from '@/constants/app-routes';

const NavbarBrand: Component = () => {
    return (
        <ul>
            <NavbarLink url={AppRoutes.ROOT}>
                <strong>Secret Santa</strong>
            </NavbarLink>
        </ul>
    );
};

export default NavbarBrand;
