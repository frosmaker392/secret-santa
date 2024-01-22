import { ParentProps } from 'solid-js';

import { UiVariant } from '@/types/design';

export interface NavbarLinkProps extends ParentProps {
    url: string;
    variant?: UiVariant;
    onClick?: () => void;
}
