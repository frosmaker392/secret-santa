const callbackUri = new URL('callback', window.location.origin);

const createOauthLoginUrl = (state: string): URL => {
    const url = new URL('authorize', window.env.OAUTH_AUTHORITY);

    url.searchParams.append('response_type', 'code');
    url.searchParams.append('client_id', window.env.OAUTH_CLIENT_ID);
    url.searchParams.append('redirect_uri', callbackUri.toString());
    url.searchParams.append('scope', 'openid profile');
    url.searchParams.append('audience', window.env.OAUTH_AUDIENCE);
    url.searchParams.append('state', state);

    console.log(callbackUri.toString());
    return url;
};

export default createOauthLoginUrl;
