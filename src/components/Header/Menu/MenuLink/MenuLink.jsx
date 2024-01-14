'use client'
import Link from 'next/link'

import React from 'react'
import styles from './MenuLink.module.css'
import { usePathname } from 'next/navigation'

const MenuLink = ({ menuLink, toggleMenu }) => {
  const pathName = usePathname()
  return (
    <Link
      className={`${styles.link} ${
        pathName === menuLink.path ? styles.active : ''
      }`}
      href={menuLink.path}
      onClick={toggleMenu}
    >
      {menuLink.title}
    </Link>
  )
}

export default MenuLink
