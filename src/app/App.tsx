import { Header } from '../components/layout/Header'
import { Task } from '../components/task/Task'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Task />
      </div>
    </div>
  )
}