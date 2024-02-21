
import { EmptyTask } from './EmptyTask'
import { InsertTask } from './InsertTask'
import { TaskHeader } from './TaskHeader'
import { TaskItem } from './TaskItem'

import { useState } from 'react'
import styles from './Task.module.css'

export interface ITask {
    id: number,
    text: string,
    isChecked: boolean
}

export function Task() {

    const [tasks, setTasks] = useState<ITask[]>([])

    const tasksCounter: number = tasks.length
    const checkedTasks: number = tasks.filter(task => (task.isChecked)).length

    function insertNewTask(text: string) {
        const newTask: ITask = {
            id: new Date().getTime(),
            text: text,
            isChecked: false
        }
        setTasks((state) => [...state, newTask])
    }

    function deleteTask(id: number) {
        const filteredTasks = tasks.filter(task => {
            return task.id !== id
        })
        setTasks(filteredTasks)
    }

    return (
        <article className={styles.task}>
            <InsertTask
                onInsertTask={insertNewTask}
            />
            <TaskHeader
                tasksCounter={tasksCounter}
                checkedTasks={checkedTasks}
            />
            <div className={styles.taskList}>
                {tasks.length > 0 ? (
                    tasks.map(task => {
                        return (
                            <TaskItem 
                                key={task.id}
                                data={task}
                                onDeleteTask={deleteTask}
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