import { TodoInLocalStorage } from '@/modules/todo/infrastructure/todo.localStorage'

const TodoConfig = {
  todoOutputs: new TodoInLocalStorage()
}

export { TodoConfig }
