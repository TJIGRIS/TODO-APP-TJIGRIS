import { useState } from 'react'

export function useFilter({ tasks }) {
  const [filter, setFilter] = useState({
    category: 'all',
    check: 0
  })

  const filterCategory = (category) => {
    setFilter((prevCaterogy) => ({
      ...prevCaterogy,
      category: category
    }))
  }

  const filterCheckActive = (check) => {
    setFilter((prevCheck) => {
      return {
        ...prevCheck,
        check: check
      }
    })
  }

  const filterCheckComplete = (check) => {
    setFilter((prevCheck) => {
      return {
        ...prevCheck,
        check: check
      }
    })
  }

  const filterTask = () => {
    if (filter.category !== 'all') {
      return tasks.filter((task) => filter.check === task.check)
    }

    return tasks
  }

  return {
    filter,
    filterCategory,
    filterCheckActive,
    filterCheckComplete,
    filterTask
  }
}
