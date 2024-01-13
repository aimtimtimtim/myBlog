import React from 'react'
import MenuLink from './MenuLink/MenuLink'

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
  return (
    <nav>
      {menuLinks.map((menuLink) => (
        <MenuLink key={menuLink.path} menuLink={menuLink} />
      ))}
    </nav>
  )
}

export default Menu
