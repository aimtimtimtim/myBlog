'use client'
import React, { useState } from 'react'
import styles from './MenuIcn.module.css'

const MenuIcn = () => {
  const [opened, setOpened] = useState(false)
  console.log(opened)
  return (
    <svg
      onClick={() => setOpened(!opened)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={` ${styles.path} ${opened ? styles.bar1 : ''}`}
        d="M3 7H21"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        className={`${styles.path} ${opened ? styles.bar2 : ''}`}
        d="M3 12H21"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        className={` ${styles.path} ${opened ? styles.bar3 : ''}`}
        d="M3 17H21"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  )
}

export default MenuIcn
