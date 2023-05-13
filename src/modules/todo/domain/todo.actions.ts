import { ITodo } from './todo'
import { ITodoOuputs } from './todo.outputs'

const getTodos = async ({
  todoOutputs
}: {
  todoOutputs: ITodoOuputs
}): Promise<ITodo[]> => {
  try {
    return todoOutputs.getTodos()
  } catch (error: any) {
    throw new Error(error)
  }
}

const createTodo = async ({
  todoOuputs,
  todo
}: {
  todoOuputs: ITodoOuputs
  todo: ITodo
}): Promise<ITodo[]> => {
  try {
    return todoOuputs.createTodo({ todo })
  } catch (error: any) {
    throw new Error(error)
  }
}

const deleteTodo = async ({
  todoOutputs,
  todoId
}: {
  todoOutputs: ITodoOuputs
  todoId: string
}): Promise<ITodo[]> => {
  try {
    return todoOutputs.deleteTodo({ todoId })
  } catch (error: any) {
    throw new Error(error)
  }
}

const updateTodo = async ({
  todoOutputs,
  todo
}: {
  todoOutputs: ITodoOuputs
  todo: ITodo
}): Promise<ITodo[]> => {
  try {
    return todoOutputs.updateTodo({ todo })
  } catch (error: any) {
    throw new Error(error)
  }
}

export { getTodos, createTodo, deleteTodo, updateTodo }
