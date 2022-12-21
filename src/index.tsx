import { render } from 'solid-js/web'
import PocketBase from 'pocketbase'

import { TodoList } from './todo-list'
import './pico.min.css'
import { PocketBaseProvider } from './providers/PocketBaseProvider'

const pb = new PocketBase('http://127.0.0.1:8090')

render(
  () => (
    <PocketBaseProvider value={pb}>
      <TodoList />
    </PocketBaseProvider>
  ),
  document.getElementById('root')!
)
