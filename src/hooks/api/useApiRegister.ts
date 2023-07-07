import { ApiEndpoints, FORM_CONTENT_TYPE_HEADER } from '../../constants/api'
import { RegisterForm, RegisterResult } from '../../types/api/auth'
import createUrlEncodedForm from '../../utils/createUrlEncodedForm'

const useApiRegister =
  (baseUrl: string) =>
  async (form: RegisterForm): Promise<RegisterResult> => {
    const url = new URL(ApiEndpoints.REGISTER, baseUrl)

    const response = await fetch(url, {
      method: 'POST',
      headers: FORM_CONTENT_TYPE_HEADER,
      body: createUrlEncodedForm(form),
    })

    if (response.status === 201) {
      return {
        type: 'success',
      }
    }

    const error = await response.json()
    const type = error.invalid_fields ? 'invalid_fields' : 'conflict'

    return {
      type,
      ...error,
    }
  }

export default useApiRegister
