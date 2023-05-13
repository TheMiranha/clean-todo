import { ITodo } from './todo'

export interface ITodoOuputs {
  getTodos: () => Promise<ITodo[]>
  createTodo: ({ todo }: { todo: ITodo }) => Promise<ITodo[]>
  deleteTodo: ({ todoId }: { todoId: string }) => Promise<ITodo[]>
  updateTodo: ({ todo }: { todo: ITodo }) => Promise<ITodo[]>
}
