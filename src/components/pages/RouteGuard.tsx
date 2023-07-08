import { Outlet, useNavigate } from '@solidjs/router'
import { Component, Show, createSignal, onMount } from 'solid-js'
import useApiCurrentUser from '../../hooks/api/useApiCurrentUser'
import { setAppStore } from '../../stores/app-store'
import { API_BASE_URL } from '../../constants/api'

const RouteGuard: Component = () => {
  const navigate = useNavigate()
  const getCurrentUser = useApiCurrentUser(API_BASE_URL)

  const [isAuthorized, setIsAuthorized] = createSignal(false)

  onMount(async () => {
    const currentUserResult = await getCurrentUser()

    if (currentUserResult.type === 'unauthorized') {
      navigate('/login')
    } else {
      setIsAuthorized(true)

      setAppStore((state) => ({
        ...state,
        currentUser: currentUserResult.user,
        hideNavbar: false,
      }))
    }
  })

  return (
    <Show when={isAuthorized()} fallback={<div>Loading...</div>}>
      <Outlet />
    </Show>
  )
}

export default RouteGuard
