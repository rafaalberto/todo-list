import styles from './TaskCounter.module.css'

interface TaskCounterProps {
    createdTasks: number,
    doneTasks: number
}

export function TaskCounter({ createdTasks, doneTasks }: TaskCounterProps) {
    return (
        <header className={styles.taskCounter}>
            <aside>
                <strong>Tarefas criadas</strong>
                <span>{createdTasks}</span>
            </aside>
            <aside>
                <strong>Tarefas concluídas</strong>
                <span>{`${doneTasks} de ${createdTasks}`}</span>
            </aside>
        </header>
    )
}