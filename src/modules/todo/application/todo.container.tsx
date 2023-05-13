import { TodoConfig } from '@/config/todo.config'
import { useEffect, useState } from 'react'
import { ITodo } from '../domain/todo'
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo
} from '../domain/todo.actions'
import { TodoForm } from './todo-form/todo.form'
import { TodoList } from './todo-list/todo.list'

const TodoContainer = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    let allTodos = await getTodos({ todoOutputs: TodoConfig.todoOutputs })
    setTodos(allTodos)
  }

  const onCreate = async (todoTitle: string) => {
    const todo: ITodo = {
      title: todoTitle,
      completed: false
    }
    let allTodos = await createTodo({
      todoOuputs: TodoConfig.todoOutputs,
      todo
    })
    setTodos(allTodos)
  }

  const onToggle = async (value: boolean, todoId: string) => {
    let todo = todos.find(todo => todo.id === todoId)
    if (todo) {
      todo.completed = value
      let allTodos = await updateTodo({
        todoOutputs: TodoConfig.todoOutputs,
        todo
      })
      setTodos(allTodos)
    }
  }

  const onDelete = async (todoId: string) => {
    let allTodos = await deleteTodo({
      todoOutputs: TodoConfig.todoOutputs,
      todoId: todoId
    })
    setTodos(allTodos)
  }

  return (
    <div>
      <TodoForm onCreate={onCreate} />
      <TodoList onToggle={onToggle} onDelete={onDelete} todos={todos} />
    </div>
  )
}

export default TodoContainer
