import { createContext } from 'solid-js'
import PocketBase from 'pocketbase'
import { Provider } from '../typeDefs'

export const PocketBaseContext = createContext(() => ({} as PocketBase))

export const PocketBaseProvider: Provider<PocketBase> = (props) => (
  <PocketBaseContext.Provider value={() => props.value}>
    {props.children}
  </PocketBaseContext.Provider>
)
