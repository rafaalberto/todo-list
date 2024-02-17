import list from '../assets/list.svg'
import styles from './Tasks.module.css'

export function Tasks() {
    return (
        <div className={styles.emptyTask}>
            <img src={list} alt="Empty List Icon" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}