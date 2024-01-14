import MailIcn from '@/src/components/Icons/MailIcn'
import styles from './contact.module.css'
import React from 'react'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mail_icn}>
        <MailIcn />
      </div>
      <p className={styles.mail}>agayevdev@gmail.com</p>
    </div>
  )
}

export default Contact
