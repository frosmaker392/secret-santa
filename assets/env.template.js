(function (window) {
    window.env = window.env || {};

    window.env['API_BASE_URL'] = '${API_BASE_URL}';
    window.env['OAUTH_AUTHORITY'] = '${OAUTH_AUTHORITY}';
    window.env['OAUTH_CLIENT_ID'] = '${OAUTH_CLIENT_ID}';
    window.env['OAUTH_AUDIENCE'] = '${OAUTH_AUDIENCE}';
})(this);
