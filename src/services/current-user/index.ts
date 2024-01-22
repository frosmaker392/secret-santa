import { ApiEndpoints, API_BASE_URL } from '@/constants/api';
import { ApiError, StatusCode } from '@/types/api/error';
import { User } from '@/types/api/user';

const getCurrentUser = async (): Promise<User> => {
    const url = new URL(ApiEndpoints.CURRENT_USER, API_BASE_URL);

    const response = await fetch(url, {
        credentials: 'include',
    });

    if (response.status === 401) {
        throw new ApiError(url.toString(), StatusCode.Unauthorized);
    }

    const { user } = await response.json();

    return user;
};

export default getCurrentUser;
