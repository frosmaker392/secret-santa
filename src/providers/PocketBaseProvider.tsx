import { createContext, ParentComponent } from 'solid-js'
import PocketBase from 'pocketbase'

interface PocketBaseProviderProps {
  value: PocketBase
}

export const PocketBaseContext = createContext(() => ({} as PocketBase))

export const PocketBaseProvider: ParentComponent<PocketBaseProviderProps> = (
  props
) => {
  return (
    <PocketBaseContext.Provider value={() => props.value}>
      {props.children}
    </PocketBaseContext.Provider>
  )
}
