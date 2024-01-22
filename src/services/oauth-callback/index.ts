import { API_BASE_URL, ApiEndpoints } from '@/constants/api';
import { ApiError, StatusCode } from '@/types/api/error';

const handleOauthCallback = async (authCode: string): Promise<void> => {
    const url = new URL(ApiEndpoints.OAUTH_CALLBACK, API_BASE_URL);

    url.searchParams.append('code', authCode);

    const response = await fetch(url, {
        credentials: 'include',
    });

    switch (response.status) {
        case 401:
            throw new ApiError(url.toString(), StatusCode.Unauthorized);
        case 403:
            throw new ApiError(url.toString(), StatusCode.Forbidden);
    }
};

export default handleOauthCallback;
