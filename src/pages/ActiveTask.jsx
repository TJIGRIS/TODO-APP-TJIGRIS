import React, { useEffect } from 'react'
import { CreateTask } from '../components/CreateTask'
import { ListTask } from '../components/ListTask'
import { useTaskContext } from '../context/TaskContextProvider'

export function ActiveTask() {
  const { tasks, filterCheckActive, filterCategory } = useTaskContext()

  const handleCheck = () => {
    filterCheckActive(0)
  }

  const handleCategory = () => {
    filterCategory('none')
  }

  useEffect(() => {
    handleCheck()
    handleCategory()
  }, [])

  const isTasks = tasks.length > 0

  return (
    <section>
      <CreateTask />

      {isTasks ? (
        <ListTask optionDelete={false} />
      ) : (
        <p className="text-xl mt-3">No hay tareas sin hacer</p>
      )}
    </section>
  )
}
