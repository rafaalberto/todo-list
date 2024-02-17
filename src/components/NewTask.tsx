import { PlusCircle } from '@phosphor-icons/react'
import styles from './NewTask.module.css'

export function NewTask() {
    return (
        <div>
            <form className={styles.taskForm}>
                <input
                    type="text"
                    name="new-task"
                    placeholder="Adicione uma nova tarefa"
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