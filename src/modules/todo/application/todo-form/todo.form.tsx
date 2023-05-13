import { Button, Container, FormElement, Input } from '@nextui-org/react'
import { ChangeEvent, useState } from 'react'

const TodoForm = ({ onCreate }: { onCreate: (todoTitle: string) => void }) => {
  const [title, setTitle] = useState<string>('')

  const handleTitleChange = (e: ChangeEvent<FormElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = () => {
    onCreate(title)
    setTitle('')
  }

  return (
    <Container
      direction="row"
      display="flex"
      justify="center"
      css={{ py: '$15', gap: '$2' }}
    >
      <Input
        labelPlaceholder="Todo title"
        bordered
        size="md"
        color="secondary"
        value={title}
        onChange={handleTitleChange}
      />
      <Button color="secondary" auto onClick={handleSubmit}>
        Create
      </Button>
    </Container>
  )
}

export { TodoForm }
