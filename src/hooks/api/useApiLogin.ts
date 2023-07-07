import { ApiEndpoints, FORM_CONTENT_TYPE_HEADER } from '../../constants/api'
import { LoginForm } from '../../types/api/auth'
import createUrlEncodedForm from '../../utils/createUrlEncodedForm'

const useApiLogin =
  (baseUrl: string) =>
  async (form: LoginForm): Promise<boolean> => {
    const url = new URL(ApiEndpoints.LOGIN, baseUrl)

    const result = await fetch(url, {
      method: 'POST',
      headers: FORM_CONTENT_TYPE_HEADER,
      body: createUrlEncodedForm(form),
      credentials: 'include',
    })

    return result.status === 200
  }

export default useApiLogin
