import { Check, Trash } from '@phosphor-icons/react'

import styles from './TaskItem.module.css'

interface TaskItemProps {
    id: number
    text: string
    isChecked: boolean
}

export function TaskItem({ id, text, isChecked } : TaskItemProps) {

    const checkboxClassName = isChecked ? styles['checkbox-checked'] : styles['checkbox-unchecked']

    return (
        <div className={styles.taskItemContent}>
            <div>
                <label htmlFor={`checkbox_${id}`}>
                    <input readOnly type="checkbox" id={`checkbox_${id}`} />
                    <span className={`${styles.checkbox} ${checkboxClassName}`}>
                        {isChecked && <Check size={12} />}
                    </span>    
                    <p>{text}</p>
                </label>    
            </div>
            <button title="Delete task">
               <Trash size={20} />
            </button>
        </div>
    )
}