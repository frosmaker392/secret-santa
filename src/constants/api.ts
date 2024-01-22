export const API_BASE_URL = window.env.API_BASE_URL;

export const ApiEndpoints = {
    CURRENT_USER: '/current-user',
    OAUTH_CALLBACK: '/callback',
    LOGOUT: '/logout',
} as const;

export const OAUTH_STATE_KEY = 'oauth_state';
