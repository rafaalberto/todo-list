import { Check, Trash } from '@phosphor-icons/react'

import { TaskType } from './Task'
import styles from './TaskItem.module.css'

interface TaskItemProps {
    data: TaskType,
    onDeleteAction: (id: number) => void
    onUpdateAction: (id: number, value: boolean) => void
}

export function TaskItem({ data, onDeleteAction, onUpdateAction }: TaskItemProps) {
    
    const checkboxClassName = data.isChecked ? styles['checkbox-checked'] : styles['checkbox-unchecked']
    const paragraphClassName = data.isChecked ? styles['paragraph-checked'] : ''

    function handleDeleteTask() {
        onDeleteAction(data.id)
    }

    function handleUpdateTask() {
        onUpdateAction(data.id, !data.isChecked)
    }

    return (
        <div className={styles.taskItemContent}>
            <div>
                <label htmlFor={`checkbox_${data.id}`} onClick={handleUpdateTask}>
                    <input readOnly type="checkbox" checked={data.isChecked} />
                    <span className={`${styles.checkbox} ${checkboxClassName}`}>
                        {data.isChecked && <Check size={12} />}
                    </span>
                    <p className={`styles.paragraph ${paragraphClassName}`}>{data.text}</p>
                </label>
            </div>
            <button title="Delete task" onClick={handleDeleteTask}>
                <Trash size={20} />
            </button>
        </div>
    )
}