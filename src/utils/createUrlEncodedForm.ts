const createUrlEncodedForm = <T extends {}>(form: T): URLSearchParams => {
  const params = new URLSearchParams()

  for (const [key, value] of Object.entries(form)) {
    params.append(key, (value as string).toString())
  }

  return params
}

export default createUrlEncodedForm
