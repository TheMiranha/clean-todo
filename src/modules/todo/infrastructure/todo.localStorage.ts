import { uuid } from 'uuidv4'
import { ITodo as IDomainTodo } from '../domain/todo'
import { ITodoOuputs } from '../domain/todo.outputs'
import { ITodo } from './todo'

export class TodoInLocalStorage implements ITodoOuputs {
  private todos: ITodo[] = []

  constructor() {
    if (typeof window !== 'undefined') {
      let json = localStorage.getItem('todos')
      if (json) {
        this.todos = JSON.parse(json)
      }
    }
  }

  async updateLocalStorage() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }

  async getTodos(): Promise<IDomainTodo[]> {
    return this.todos.map(todo =>
      this.mapToDomainModel({ infrastructureModel: todo })
    )
  }

  async createTodo({ todo }: { todo: IDomainTodo }): Promise<IDomainTodo[]> {
    const newTodo: ITodo = {
      id: uuid(),
      completed: todo.completed,
      title: todo.title
    }
    this.todos.push(newTodo)
    await this.updateLocalStorage()
    return this.getTodos()
  }

  async deleteTodo({ todoId }: { todoId: string }): Promise<IDomainTodo[]> {
    this.todos = this.todos.filter(todo => todo.id !== todoId)
    await this.updateLocalStorage()
    return this.getTodos()
  }

  async updateTodo({ todo }: { todo: IDomainTodo }): Promise<IDomainTodo[]> {
    const infrastructureTodo = this.mapToInfrastructureModel({
      domainTodo: todo
    })
    const todoIndex = this.todos.findIndex(
      todo => todo.id === infrastructureTodo.id
    )
    console.log('a')
    if (todoIndex != -1) {
      this.todos[todoIndex] = infrastructureTodo
    }
    await this.updateLocalStorage()
    return this.getTodos()
  }

  mapToInfrastructureModel({ domainTodo }: { domainTodo: IDomainTodo }): ITodo {
    return {
      id: domainTodo.id || uuid(),
      title: domainTodo.title,
      completed: domainTodo.completed
    }
  }

  mapToDomainModel({
    infrastructureModel
  }: {
    infrastructureModel: ITodo
  }): IDomainTodo {
    return {
      id: infrastructureModel.id,
      title: infrastructureModel.title,
      completed: infrastructureModel.completed
    }
  }
}
