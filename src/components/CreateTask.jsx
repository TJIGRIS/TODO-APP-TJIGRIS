import React, { useState } from 'react'
import { useTaskContext } from '../context/TaskContextProvider'

export function CreateTask() {
  const { addTask } = useTaskContext()
  const [newTask, setNewTask] = useState('')

  const handleChangeTask = (event) => {
    const task = event.target.value
    if (task.startsWith(' ')) return

    setNewTask(task)
  }

  const handleAddTask = (event) => {
    event.preventDefault()
    if (newTask === '') return alert('No hay tarea')

    addTask(newTask)
    setNewTask('')
  }

  return (
    <form className="flex h-14 gap-4" onSubmit={handleAddTask}>
      <input
        className="w-full h-full outline-none border-[1px] border-[#BDBDBD] rounded-xl px-3 py-6"
        type="text"
        placeholder="Add details"
        onChange={handleChangeTask}
        value={newTask}
        autoFocus
      />
      <button className="w-[109px] h-full bg-[#2F80ED] rounded-xl text-white text-sm">
        Add
      </button>
    </form>
  )
}
