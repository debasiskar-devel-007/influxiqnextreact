import React , { useState,useEffect }from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Header() {
  const router = useRouter();

const [loading, setLoading] = useState(false);

useEffect(() => {
    const handleStart = (url) => { url !== router.pathname ? setLoading(true) : setLoading(false);};
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
  <div>
    <Box sx={{ width: '100%' }}>
      {(loading == true) ? <LinearProgress color="secondary" />:null}
    </Box>
  </div>
 
    <div className={styles.header}>
      <div>
        <Link href='/'><h2 style={{ marginLeft: 100, cursor: 'pointer', }}>InfluxIQ Next</h2></Link>
      </div>
      <nav style={{ display: 'flex', padding: 10, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <Link href='/'><p style={{ fontWeight: 'bold', cursor: 'pointer', marginLeft: 20 }}>Home</p></Link>
        <Link href='/about'><p style={{ fontWeight: 'bold', cursor: 'pointer', marginLeft: 20 }}> About Us</p></Link>
        <Link href='/users/adduser'><p style={{ fontWeight: 'bold', cursor: 'pointer', marginLeft: 20 }}>Add User</p></Link>
        <Link href='/listingusers'><p style={{ fontWeight: 'bold', color: 'red', cursor: 'pointer', marginLeft: 20 }}>Users Listing</p></Link>

      </nav>
    </div>
    </>
  )
}
