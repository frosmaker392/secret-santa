import { render } from 'solid-js/web'

import { TodoList } from './todo-list'
import 'pico.min.css'

render(() => <TodoList />, document.getElementById('root')!)
