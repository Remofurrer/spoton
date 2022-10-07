import React from 'react';
import styles from '../styles/Slider.module.css';
import Image from 'next/image';
import Logo1 from '../public/sliderIcon/logo1.webp';
import Logo2 from '../public/sliderIcon/logo2.webp';
import Logo3 from '../public/sliderIcon/logo3.webp';
import Logo4 from '../public/sliderIcon/logo4.webp';
import Logo5 from '../public/sliderIcon/logo5.webp';
import Logo6 from '../public/sliderIcon/logo6.webp';
import Logo7 from '../public/sliderIcon/logo7.webp';
import Logo8 from '../public/sliderIcon/logo8.webp';
import Logo9 from '../public/sliderIcon/logo9.webp';
import Logo10 from '../public/sliderIcon/logo10.webp';
import Logo11 from '../public/sliderIcon/logo11.webp';
import Logo12 from '../public/sliderIcon/logo12.webp';
import Logo13 from '../public/sliderIcon/logo13.webp';
import Logo14 from '../public/sliderIcon/logo14.webp';
import Logo15 from '../public/sliderIcon/logo15.webp';
import Logo16 from '../public/sliderIcon/logo16.webp';

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
        <div className={styles.logoSlider}>
            <Image className={styles.logo} src={Logo2} />
            <Image className={styles.logo} src={Logo3} />
            <Image className={styles.logo} src={Logo1} />
            <Image className={styles.logo} src={Logo4} />
            <Image className={styles.logo} src={Logo5} />
            <Image className={styles.logo} src={Logo6} />
            <Image className={styles.logo} src={Logo7} />
            <Image className={styles.logo} src={Logo8} />
            <Image className={styles.logo} src={Logo9} />
            <Image className={styles.logo} src={Logo10} />
            <Image className={styles.logo} src={Logo11} />
            <Image className={styles.logo} src={Logo12} />
            <Image className={styles.logo} src={Logo13} />
            <Image className={styles.logo} src={Logo14} />
            <Image className={styles.logo} src={Logo15} />
            <Image className={styles.logo} src={Logo16} />
        </div>
    </div>
  )
}

export default Slider