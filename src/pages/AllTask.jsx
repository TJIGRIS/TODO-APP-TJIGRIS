import React, { useEffect } from 'react'
import { CreateTask } from '../components/CreateTask'
import { ListTask } from '../components/ListTask'
import { useTaskContext } from '../context/TaskContextProvider'

export function AllTask() {
  const { tasks, filterCategory } = useTaskContext()

  const handleCategory = () => {
    filterCategory('all')
  }

  useEffect(() => {
    handleCategory()
  }, [])

  const isTasks = tasks.length > 0

  return (
    <section>
      <CreateTask />

      {isTasks ? (
        <ListTask optionDelete={false} />
      ) : (
        <p className="text-xl mt-3">No hay tareas</p>
      )}
    </section>
  )
}
