import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (

    <div>
      <div>
        <h2 style={{ marginLeft: 100 }}>InfluxIQ Next</h2>
      </div>
      <nav style={{ display: 'flex', padding: 10, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <Link href='/'><p style={{ fontWeight: 'bold', fontStyle: 'italic', cursor: 'pointer', marginLeft: 20 }}>Home</p></Link>
        <Link href='/about'><p style={{ fontWeight: 'bold', fontStyle: 'italic', cursor: 'pointer', marginLeft: 20 }}> About Us</p></Link>
        <Link href='/users/adduser'><p style={{ fontWeight: 'bold', fontStyle: 'italic', cursor: 'pointer', marginLeft: 20 }}>Add User</p></Link>
        <Link href='/listingusers'><p style={{ fontWeight: 'bold', color: 'blue', cursor: 'pointer', marginLeft: 20 }}>Users Listing</p></Link>

      </nav>
    </div>
  )
}
