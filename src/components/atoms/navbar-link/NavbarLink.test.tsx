import { Router } from '@solidjs/router';
import { render, screen } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';

import NavbarLink from './NavbarLink';

describe('navbar-link component', () => {
    it('should render a router anchor with a href attribute', async () => {
        const link = '/test-link';
        const textContent = 'Test text content';

        render(() => (
            <Router>
                <NavbarLink url={link}>{textContent}</NavbarLink>
            </Router>
        ));

        const anchor = screen.getByRole('link');

        expect(anchor).toHaveAttribute('href', link);
        expect(anchor).toHaveTextContent(textContent);
    });
});
