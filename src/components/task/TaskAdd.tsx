import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './TaskAdd.module.css'

interface TaskAddProps {
    onInsertAction: (text: string) => void
}

export function TaskAdd({ onInsertAction }: TaskAddProps) {

    const [inputNewTask, setInputNewTask] = useState('')

    function handleInputNewTask(event: ChangeEvent<HTMLInputElement>) {
        setInputNewTask(event.target.value)
    }

    function handleInsertTask(event: FormEvent) {
        event.preventDefault()
        onInsertAction(inputNewTask)
        setInputNewTask('')
    }

    return (
        <div>
            <form className={styles.taskForm} onSubmit={handleInsertTask}>
                <input
                    type="text"
                    name="new-task"
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleInputNewTask}
                    value={inputNewTask}
                />

                <footer>
                    <button type="submit">
                        Criar
                        <PlusCircle size={24} />
                    </button>
                </footer>
            </form>
        </div>
    )
}