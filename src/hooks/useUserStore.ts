import Pocketbase from 'pocketbase'
import { createSignal } from 'solid-js'

const useUserStore = (pb: Pocketbase) => {
  const [getUser, setUser] = createSignal(pb.authStore.model)

  const removeChangeListener = pb.authStore.onChange((_, model) => {
    setUser(model)
  })

  return { getUser, removeChangeListener }
}

export default useUserStore
