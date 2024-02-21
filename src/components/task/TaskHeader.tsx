import styles from './TaskHeader.module.css'

interface TaskHeaderProps {
    tasksCounter: number,
    checkedTasks: number
}

export function TaskHeader({ tasksCounter, checkedTasks }: TaskHeaderProps) {
    return (
        <header className={styles.infoTask}>
            <aside>
                <strong>Tarefas criadas</strong>
                <span>{tasksCounter}</span>
            </aside>
            <aside>
                <strong>Concluídas</strong>
                <span>{`${checkedTasks} de ${tasksCounter}`}</span>
            </aside>
        </header>
    )
}