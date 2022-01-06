import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
    <nav>
      <div>
        <h1 style={{ textAlign: 'center' }}>InfluxIQ Next</h1>
      </div>
      <Link href='/about'><p style={{ fontWeight: 'bold', fontStyle: 'italic', cursor: 'pointer', marginLeft: 50 }}>About</p></Link>

      <Link href='/adduser'><p style={{ fontWeight: 'bold', fontStyle: 'italic', cursor: 'pointer', marginLeft: 50 }}>Add User</p></Link>
      <Link href='/listingusers'><p style={{ fontWeight: 'bold', color: 'blue', cursor: 'pointer', marginLeft: 50 }}>Users Listing</p></Link>

    </nav>
  )
}
