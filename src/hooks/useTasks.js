import { useEffect, useState } from "react"

export function useTasks() {
  const [tasks, setTasks] = useState(
    JSON.parse(window.localStorage.getItem('tasks')) || []
  )

  const GetLocalStorage = (tasks) => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  useEffect(() => {
    GetLocalStorage(tasks)
  }, [tasks])

  const addTask = (task) => {
    const newTask = {
      id: tasks.length,
      task,
      check: 0
    }

    setTasks((prevTask) => [newTask, ...prevTask])
  }

  const completeTask = (task) => {
    const newCompleteTask = tasks.map((item) => {
      if (item.id === task.id) {
        return {
          ...item,
          check: 1
        }
      }

      return item
    })

    return setTasks(newCompleteTask)
  }

  const noCompleteTask = (task) => {
    const newCompleteTask = tasks.map((item) => {
      if (item.id === task.id) {
        return {
          ...item,
          check: 0
        }
      }

      return item
    })

    return setTasks(newCompleteTask)
  }

  const deleteTask = (task) => {
    setTasks((prevTask) => prevTask.filter((item) => item.id !== task.id))
  }

  const deleteAll = () => {
    setTasks((prevTaks) => prevTaks.filter((task) => task.check !== 1))
  }

  return {
    tasks,
    addTask,
    completeTask,
    noCompleteTask,
    deleteAll,
    deleteTask
  }
}
