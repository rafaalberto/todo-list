import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './InsertTask.module.css'

interface InsertTaskProps {
    onInsertTask: (text: string) => void
}

export function InsertTask({ onInsertTask }: InsertTaskProps) {

    const [inputNewTask, setInputNewTask] = useState('')

    function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
        setInputNewTask(event.target.value)
    }

    function handleInsertNewTask(event: FormEvent) {
        event.preventDefault()
        onInsertTask(inputNewTask)
        setInputNewTask('')
    }

    return (
        <div>
            <form className={styles.taskForm} onSubmit={handleInsertNewTask}>
                <input
                    type="text"
                    name="new-task"
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleNewTask}
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