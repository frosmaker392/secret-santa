export type Optional<T> = T | undefined

// Pocketbase types
export interface PBError<T> {
  code: number
  data: T
  message: string
}

export type PBCreateError<T> = PBError<{
  data: { [K in keyof T]: { code: string; message: string } }
}>
