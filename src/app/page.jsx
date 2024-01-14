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
      <div className={styles.img_container}>
        <Image
          src={reactImg}
          className={styles.react_img}
          height={184}
          width={184}
        />
        <Image
          src={nextLogo}
          className={styles.next_img}
          height={30}
          width={30}
        />
        <Image
          src={figmaLogo}
          className={styles.figma_img}
          height={25}
          width={20}
        />
      </div>
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
    </main>
  )
}

export default Home
