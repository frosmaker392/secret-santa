import { useNavigate, useSearchParams } from '@solidjs/router';
import { Component, Show, createSignal, onCleanup } from 'solid-js';

import { OAUTH_STATE_KEY } from '@/constants/api';
import { OAuthCallbackParams } from './OAuthCallback.types';
import { handleOauthCallback } from '@/services';

const OAuthCallback: Component = () => {
    const [searchParams] = useSearchParams<OAuthCallbackParams>();
    const navigate = useNavigate();

    const [isError, setIsError] = createSignal(false);

    const timer = setTimeout(async () => {
        const { state, code } = searchParams;
        const storedState = localStorage.getItem(OAUTH_STATE_KEY);

        if (!code || !state || !storedState || state !== storedState) {
            setIsError(true);
            return;
        }

        try {
            await handleOauthCallback(code);
            navigate('/');
        } catch {
            setIsError(true);
        }
    }, 2000);

    onCleanup(() => clearTimeout(timer));

    return (
        <Show when={isError()} fallback={<div aria-busy="true" />}>
            <main>
                <h1>Oopsie woopsie we did a fuckije wuckkie</h1>
                <p>Please try logging in again</p>
            </main>
        </Show>
    );
};

export default OAuthCallback;
