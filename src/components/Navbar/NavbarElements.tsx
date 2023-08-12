import React from 'react'

type ReactChildren = {
  children: string | JSX.Element | JSX.Element[]
}

export function NavMenu({children}: ReactChildren) {
  return (
    <nav className="navMenu">
      {children}
    </nav>
  )
}
