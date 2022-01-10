import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
export default function Header() {
  return (

    <div className={styles.header}>
      <div>
        <Link href='/'><h2 style={{ marginLeft: 100, cursor: 'pointer', }}>InfluxIQ Next</h2></Link>
      </div>
      <nav style={{ display: 'flex', padding: 10, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <Link href='/'><p style={{ fontWeight: 'bold', cursor: 'pointer', marginLeft: 20 }}>Home</p></Link>
        <Link href='/about'><p style={{ fontWeight: 'bold', cursor: 'pointer', marginLeft: 20 }}> About Us</p></Link>
        <Link href='/users/adduser'><p style={{ fontWeight: 'bold', cursor: 'pointer', marginLeft: 20 }}>Add User</p></Link>
        <Link href='/listingusers'><p style={{ fontWeight: 'bold', color: 'green', cursor: 'pointer', marginLeft: 20 }}>Users Listing</p></Link>

      </nav>
    </div>
  )
}
