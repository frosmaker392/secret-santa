import { createContext } from 'solid-js'
import PocketBase from 'pocketbase'
import { ContextProviderComponent } from 'solid-js/types/reactive/signal'

export const PocketBaseContext = createContext(() => ({} as PocketBase))

export const PocketBaseProvider: ContextProviderComponent<PocketBase> = (
  props
) => (
  <PocketBaseContext.Provider value={() => props.value}>
    {props.children}
  </PocketBaseContext.Provider>
)
