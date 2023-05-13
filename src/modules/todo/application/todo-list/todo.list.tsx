import { Container } from '@nextui-org/react'
import { ITodo } from '../../domain/todo'
import { Todo } from '../todo/todo'

const TodoList = ({
  todos,
  onToggle,
  onDelete
}: {
  todos: ITodo[]
  onToggle: (value: boolean, todoId: string) => void
  onDelete: (todoId: string) => void
}) => {
  return (
    <Container
      display="flex"
      css={{ maxW: '90vw', width: '600px', gap: '20px', pt: '20px', pb: '20px'}}
    >
      {todos.map(todo => (
        <Todo
          onToggle={onToggle}
          onDelete={onDelete}
          key={`${todo.id}`}
          todo={todo}
        />
      ))}
    </Container>
  )
}

export { TodoList }

