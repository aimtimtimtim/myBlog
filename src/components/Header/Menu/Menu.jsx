'use client'
import React, { useState } from 'react'
import MenuLink from './MenuLink/MenuLink'
import MenuIcn from '../../Icons/MenuIcn'
import styles from './Menu.module.css'

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
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {menuLinks.map((menuLink) => (
          <MenuLink key={menuLink.path} menuLink={menuLink} />
        ))}
      </nav>
      <div
        className={styles.menu_icn}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <MenuIcn />
      </div>
      {isOpen && (
        <nav className={styles.moblie_nav}>
          {menuLinks.map((menuLink) => (
            <MenuLink key={menuLink.path} menuLink={menuLink} />
          ))}
        </nav>
      )}
    </div>
  )
}

export default Menu
