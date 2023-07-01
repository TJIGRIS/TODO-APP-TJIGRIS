import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { useTaskContext } from '../context/TaskContextProvider'

export function ListTask({ optionDelete }) {
  const { tasks, completeTask, noCompleteTask, deleteTask } = useTaskContext()

  const handleCompleteTask = (task) => {
    completeTask(task)
  }

  const handleNoCompleteTask = (task) => {
    noCompleteTask(task)
  }

  const handleDeleteTask = (task) => {
    deleteTask(task)
  }

  return (
    <ul className="mt-8 flex flex-col gap-7">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between [&>div]:flex [&>div]:gap-2 [&>div>input]:w-6 [&>div>p]:text-lg [&>div>p]:font-medium [&>button]:text-[#BDBDBD]"
        >
          <div>
            <input
              type="checkbox"
              checked={task.check === 1 ? true : false}
              onChange={() =>
                task.check === 0
                  ? handleCompleteTask(task)
                  : handleNoCompleteTask(task)
              }
            />
            <p className={`${task.check === 1 && 'line-through'}`}>
              {task.task}
            </p>
          </div>

          {optionDelete && (
            <button onClick={() => handleDeleteTask(task)}>
              <MdDeleteOutline size={23} />
            </button>
          )}
        </li>
      ))}
    </ul>
  )
}
