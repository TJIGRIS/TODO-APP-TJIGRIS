import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export function LinksPages() {
  const { pathname } = useLocation()

  const blockAcive =
    'before:block before:absolute before:top-9 before:-inset-1 before:bg-[#2F80ED] before:w-[92px] before:h-[4px] before:rounded-bloque relative flex justify-center'

  return (
    <ul className="flex justify-around w-full mb-[18px] [&>li]:w-[85px] [&>li]:text-center font-semibold text-sm">
      <li>
        <Link
          className={`${
            (pathname === '/all' || pathname === '/') && blockAcive
          }`}
          to="/all"
        >
          <span className="relative">All</span>
        </Link>
      </li>
      <li>
        <Link
          className={`${pathname === '/active' && blockAcive}`}
          to="/active"
        >
          <span className="relative">Active</span>
        </Link>
      </li>
      <li>
        <Link
          className={`${pathname === '/complete' && blockAcive}`}
          to="/complete"
        >
          <span className="relative">Complete</span>
        </Link>
      </li>
    </ul>
  )
}
