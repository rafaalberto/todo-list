
import { EmptyTask } from './EmptyTask'
import { InsertTask } from './InsertTask'
import { TaskItem } from './TaskItem'

import styles from './Task.module.css'

interface ITask {
    id: number,
    text: string,
    isChecked: boolean
}

export function Task() {
    
    const tasks: ITask[] = [
        {id: 1, text: "Aprender ReactJS", isChecked: false},
        {id: 2, text: "Estudar Typescript", isChecked: true},
        {id: 3, text: "Ler livro sobre arquitetura de software", isChecked: true},
    ]
    
    const tasksCounter: number = tasks.length
    const checkedTasks: number = tasks.filter(task => (task.isChecked)).length

    return (
        <article className={styles.task}>
            <InsertTask />
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
            <div className={styles.taskHeader}>
                {tasks.length > 0 ? (
                    tasks.map(task => {
                        return (
                            <TaskItem key={task.id} 
                                id={task.id} 
                                text={task.text} 
                                isChecked={task.isChecked} 
                            />
                        )
                    })
                ) : (
                    <EmptyTask />
                )}
            </div>
        </article>
    )
}