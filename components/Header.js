import React from 'react';
import styles from '../styles/Header.module.css';
import upperLeft from '../public/upperleft.svg'
import upperRight from '../public/upperright.svg'
import bottomLeft from '../public/bottomleft.svg'
import BottomRight from '../public/bottomright.svg'
import Image from 'next/image';

const Header = () => {
  return (
    <>
    <div className={styles.Header}>
        <Image src={upperLeft} className={styles.box1} />
        <Image src={upperRight} className={styles.box2} />
        <Image src={bottomLeft} className={styles.box3} />
        <Image src={BottomRight} className={styles.box4} />
    </div>
    <div className={styles.container}>
        <h2>spot on Workspace</h2>
    </div>
    </>
  )
}

export default Header