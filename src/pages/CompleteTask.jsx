import React, { useEffect } from 'react'
import { ListTask } from '../components/ListTask'
import { useTaskContext } from '../context/TaskContextProvider'

import { MdDeleteOutline } from 'react-icons/md'

export function CompleteTask() {
  const { tasks, deleteAll, filterCheckComplete, filterCategory } =
    useTaskContext()

  const handleDeleteAll = () => {
    deleteAll()
  }

  const handleCheck = () => {
    filterCheckComplete(1)
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
      {isTasks ? (
        <>
          <ListTask optionDelete={true} />

          <div className="flex flex-row-reverse text-white mt-[45px]">
            <button
              className="flex items-center justify-center gap-[3px] w-[124px] h-10 bg-[#EB5757] rounded-[4px]"
              onClick={handleDeleteAll}
            >
              <MdDeleteOutline size={15} />
              <span>delete all</span>
            </button>
          </div>
        </>
      ) : (
        <p className="text-xl">No hay tareas completadas</p>
      )}
    </section>
  )
}
