import React from 'react'
import { LinksPages } from '../components/LinksPages'

export function Header() {
  return (
    <section className="flex flex-col items-center [&>h1]:font-raleway [&>h1]:pt-8 [&>h1]:pb-14 [&>h1]:text-4xl [&>h1]:font-bold ">
      <h1>#todo</h1>

      <LinksPages />

      <hr className="w-full border-[1px] mb-[18px]" />
    </section>
  )
}
