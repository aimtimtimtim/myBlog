import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './home.module.css'

import reactImg from '../../public/reactImg.png'
import nextLogo from '../../public/nextLogo.png'
import figmaLogo from '../../public/figmaLogo.png'

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.text_container}>
        <p>
          <span>{'<>'}</span>
          {' From Design to Code: '}
          <span>{'</>'}</span>
        </p>
        <h1>
          Portfolio and Notes from a Novice in the World of Reactive Development
        </h1>
        <Link href={'/about'} className={styles.text_container__btn}>
          Start from ‘About’ page
        </Link>
      </div>
      <div className={styles.img_container}>
        <Image src={reactImg} fill className={styles.react_img} />
        <Image src={nextLogo} className={styles.next_img} />
        <Image src={figmaLogo} className={styles.figma_img} />
        <p className={styles.development}>Development</p>
        <p className={styles.design}>Design</p>
      </div>
    </main>
  )
}

export default Home
