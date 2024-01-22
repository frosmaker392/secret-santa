interface NavbarMinimalProps {
    type: 'minimal';
}

interface NavbarLoggedInProps {
    type: 'loggedIn';
    onClickLogout: () => void;
}

interface NavbarLoggedOutProps {
    type: 'loggedOut';
    onClickLogin: () => void;
}

export type NavbarProps =
    | NavbarMinimalProps
    | NavbarLoggedInProps
    | NavbarLoggedOutProps;
