import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import myPhoto from '../../../public/myPhoto.jpg'

import styles from './about.module.css'
import SendIcn from '@/src/components/Icons/SendIcn'

const About = () => {
  return (
    <div className={styles.container}>
      <Image src={myPhoto} className={styles.myPhoto_img} alt={'myPhoto'} />
      <div className={styles.info_container}>
        <h2>Tim Agayev</h2>
        <p className={styles.first_par}>
          My name is Tim Agayev, and I am a novice front-end developer,
          previously involved in UX/UI design. This blog is the space where I
          share my experience and research in the field of web development using
          Next.js.
        </p>
        <br />
        <p className={styles.second_par}>
          Here, you will find articles dedicated to working with Next.js,
          JavaScript, and React.
        </p>
        <Link href={'https://github.com/atdev03'} className={styles.gh_link}>
          Link to GitHub <SendIcn className={styles.gh_link__icn} />
        </Link>
      </div>
    </div>
  )
}

export default About
