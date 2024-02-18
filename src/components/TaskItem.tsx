import { Check, Trash } from '@phosphor-icons/react'

import styles from './TaskItem.module.css'

export function TaskItem() {
    return (
        <div className={styles.taskContent}>
            <div>
                <label htmlFor="checkbox">
                    <input readOnly type="checkbox" id="checkbox" />
                    <span className={`${styles.checkbox} ${styles['checkbox-checked']}`}>
                        <Check size={12} />
                    </span>    
                    <p>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                    </p>
                </label>    
            </div>
            <button title="Delete task">
                <Trash size={20} />
            </button>
        </div>
    )
}