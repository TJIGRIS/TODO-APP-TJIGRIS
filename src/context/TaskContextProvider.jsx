import React, { createContext, useContext, useEffect, useState } from 'react'
import { useTasks } from '../hooks/useTasks'
import { useFilter } from '../hooks/useFilter'

const CreateContext = createContext()

export function useTaskContext() {
  const context = useContext(CreateContext)

  if (context === undefined) throw new Error('No found TaskContextProvider')

  return context
}

export function TaskContextProvider({ children }) {
  const {
    tasks,
    addTask,
    completeTask,
    noCompleteTask,
    deleteAll,
    deleteTask
  } = useTasks()

  const { filterCategory, filterCheckActive, filterCheckComplete, filterTask } =
    useFilter({ tasks })

  return (
    <CreateContext.Provider
      value={{
        tasks: filterTask(),
        addTask,
        deleteAll,
        deleteTask,
        completeTask,
        noCompleteTask,
        filterCategory,
        filterCheckActive,
        filterCheckComplete
      }}
    >
      {children}
    </CreateContext.Provider>
  )
}
