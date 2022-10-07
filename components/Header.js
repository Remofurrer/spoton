import React from 'react';
import styles from '../styles/Header.module.css';
import Headerbg from '../public/header.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
        <Image className={styles.img} src={Headerbg} />
        <h2 className={styles.text}>About</h2>
    </div>
  )
}

export default Header