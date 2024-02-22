
import { EmptyTask } from './EmptyTask'
import { InsertTask } from './InsertTask'
import { TaskCounter } from './TaskCounter'
import { TaskItem } from './TaskItem'

import { useState } from 'react'
import styles from './Task.module.css'

export interface TaskType {
    id: number,
    text: string,
    isDone: boolean
}

export function Task() {

    const [tasks, setTasks] = useState<TaskType[]>([])

    const createdTasks: number = tasks.length
    const doneTasks: number = tasks.filter(task => (task.isDone)).length

    function insertTask(text: string) {
        const newTask: TaskType = {
            id: new Date().getTime(),
            text: text,
            isDone: false
        }
        setTasks((state) => [...state, newTask])
    }

    function updateTask(id: number, value: boolean) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, isDone: value }
            }
            return { ...task }
        })
        setTasks(updatedTasks)
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
                onInsertAction={insertTask}
            />
            <TaskCounter
                createdTasks={createdTasks}
                doneTasks={doneTasks}
            />
            <div className={styles.taskList}>
                {tasks.length > 0 ? (
                    tasks.map(task => {
                        return (
                            <TaskItem
                                key={task.id}
                                data={task}
                                onUpdateAction={updateTask}
                                onDeleteAction={deleteTask}
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