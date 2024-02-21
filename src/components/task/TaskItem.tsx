import { Check, Trash } from '@phosphor-icons/react'

import { ITask } from './Task'
import styles from './TaskItem.module.css'

interface TaskItemProps {
    data: ITask,
    onDeleteTask: (id: number) => void
}

export function TaskItem({ data, onDeleteTask }: TaskItemProps) {

    const checkboxClassName = data.isChecked ? styles['checkbox-checked'] : styles['checkbox-unchecked']

    function handleDeleteTask() {
        onDeleteTask(data.id)
    }

    return (
        <div className={styles.taskItemContent}>
            <div>
                <label htmlFor={`checkbox_${data.id}`}>
                    <input readOnly type="checkbox" id={`checkbox_${data.id}`} />
                    <span className={`${styles.checkbox} ${checkboxClassName}`}>
                        {data.isChecked && <Check size={12} />}
                    </span>
                    <p>{data.text}</p>
                </label>
            </div>
            <button title="Delete task" onClick={handleDeleteTask}>
                <Trash size={20} />
            </button>
        </div>
    )
}