import { ApiEndpoints } from '../../constants/api'
import { CurrentUserResult } from '../../types/api/user'

const useApiCurrentUser =
  (baseUrl: string) => async (): Promise<CurrentUserResult> => {
    const url = new URL(ApiEndpoints.CURRENT_USER, baseUrl)

    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    })

    if (response.status === 401) {
      return {
        type: 'unauthorized',
      }
    }

    const { user } = await response.json()

    return {
      type: 'success',
      user,
    }
  }

export default useApiCurrentUser
