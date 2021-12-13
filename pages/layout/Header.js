import React from 'react'
import Link from 'next/link'
export default function Header() {
    return (
        <nav>
            <div>
                <p>InfluxIq Next</p>
            </div>
            <Link href='/about'><p>About</p></Link>

        </nav>
    )
}
