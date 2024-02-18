import list from '../assets/list.svg'
import styles from './Tasks.module.css'

export function Tasks() {
    return (
        <article className={styles.tasks}>
            <header className={styles.infoTask}>
                <aside>
                    <strong>Tarefas criadas</strong>
                    <span>0</span>
                </aside>
                <aside>
                    <strong>Concluídas</strong>
                    <span>0</span>
                </aside>
            </header>
            <div className={styles.emptyTask}>
                <img src={list} alt="Empty List Icon" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </article>
    )
}