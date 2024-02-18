import { Header } from './components/Header'
import { InsertTask } from './components/task/InsertTask'
import { TaskList } from './components/task/TaskList'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <InsertTask />
        <TaskList />
      </div>
    </div>
  )
}