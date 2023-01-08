import { render } from 'solid-js/web'
import PocketBase from 'pocketbase'

import './pico.min.css'
import { PocketBaseProvider } from './providers/PocketBaseProvider'
import Login from './components/pages/Login'

const pb = new PocketBase('http://127.0.0.1:8090')

render(
  () => (
    <PocketBaseProvider value={pb}>
      <Login />
    </PocketBaseProvider>
  ),
  document.getElementById('root')!
)
