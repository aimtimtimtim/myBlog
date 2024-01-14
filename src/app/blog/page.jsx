import React from 'react'
import styles from './blog.module.css'
const Blog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Blog</h1>
      <p className={styles.paragraph}>
        Here will be posts about frontend development using React and Next.js,
        and a bit about my journey as a developer, but for now, it's empty.
      </p>
    </div>
  )
}

export default Blog
