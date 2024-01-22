import { API_BASE_URL, ApiEndpoints } from '@/constants/api';
import { ApiError, StatusCode } from '@/types/api/error';

const logout = async (): Promise<void> => {
    const url = new URL(ApiEndpoints.LOGOUT, API_BASE_URL);

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'include',
    });

    if (response.status === StatusCode.BadRequest) {
        throw new ApiError(url.toString(), StatusCode.BadRequest);
    }
};

export default logout;
