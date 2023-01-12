import { FieldValues, FormState, setError } from '@modular-forms/solid'
import { PBCreateError } from '../typeDefs'

const useFormSubmit = <T extends FieldValues>(
  form: FormState<T>,
  callback: (fieldValues: T) => Promise<void>
) => {
  return async (fieldValues: T) => {
    try {
      await callback(fieldValues)
    } catch (err) {
      const fieldErrors = (err as PBCreateError<T>).data.data
      console.log((err as any).data)
      const fieldNames = Object.keys(fieldErrors) as (keyof T)[]

      for (const fieldName of fieldNames) {
        setError(form, fieldName as any, fieldErrors[fieldName].message)
      }
    }
  }
}

export default useFormSubmit
