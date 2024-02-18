import list from '../../assets/list.svg'
import styles from './EmptyTask.module.css'

export function EmptyTask() {
    return (
        <div className={styles.emptyTask}>
            <img src={list} alt="Empty List Icon" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}