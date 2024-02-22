import list from '../../assets/list.svg'
import styles from './TaskEmptyList.module.css'

export function TaskEmptyList() {
    return (
        <div className={styles.emptyList}>
            <img src={list} alt="Empty List Icon" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}