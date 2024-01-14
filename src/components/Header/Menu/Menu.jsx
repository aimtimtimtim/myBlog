'use client'
import React, { useState } from 'react'
import MenuLink from './MenuLink/MenuLink'
import MenuIcn from '../../Icons/MenuIcn'
import styles from './Menu.module.css'
import { usePathname } from 'next/navigation'
import CloseIcn from '../../Icons/CloseIcn'

const menuLinks = [
  {
    title: 'Homepage',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
]

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {menuLinks.map((menuLink) => (
          <MenuLink
            key={menuLink.path}
            menuLink={menuLink}
            toggleMenu={toggleMenu}
          />
        ))}
      </nav>
      <div className={styles.menu_icn} onClick={toggleMenu}>
        <MenuIcn />
      </div>
      <nav className={`${styles.moblie_nav} ${isOpen ? styles.active : ''}`}>
        <div className={styles.close} onClick={toggleMenu}>
          <CloseIcn />
          Close
        </div>

        {menuLinks.map((menuLink) => (
          <MenuLink key={menuLink.path} menuLink={menuLink} />
        ))}
      </nav>
    </div>
  )
}

export default Menu
