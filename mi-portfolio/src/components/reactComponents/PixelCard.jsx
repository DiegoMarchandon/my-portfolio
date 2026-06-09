"use client"

import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import {useEffect, useState} from 'react';
import styles from '../../styles/reactStyles/PixelCard.module.css';
// import LocationLogo from './logos/locationLogo';


export default function PixelCard({locale = 'es'}){

    const [isHover, setIsHover] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
        controls.start({
            x: ['-200%', '315%'],
            transition: { duration: 1.8, ease: 'easeInOut' },
        });
        }, 5000);
        return () => clearInterval(interval);
    }, [controls]);

    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        x.set(offsetX);
        y.set(offsetY);
    };

    const localeSwitch = {
      es: {location: 'Localización',focusOn: 'Enfocado en',purpose: 'Incorporar Docker y testing con PHPUnit'},
      en: {location: 'Location',focusOn: 'Currently focused on',purpose: 'Incorporating Docker and testing with PHPUnit'},
      pt: {location: 'Localização',focusOn: 'Focado em',purpose: 'Incorporar o Docker e testes com o PHPUnit'},
      
    }

return (
    <div class={styles.container}>
      <motion.div
        class={styles.card}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => { setIsHover(false); x.set(0); y.set(0); }}
        style={{ rotateX, rotateY }}
        animate={{ scale: isHover ? 1.05 : 1 }}
      >

        {/* Fondo */}
        {/* <img src="/dni-bg.png" class={styles.bg} /> */}

        {/* Brillo animado */}
        <motion.div
          class={styles.shine}
          animate={controls}
        />

        {/* Contenido */}
        <div class={styles.content}>
          <div class={styles.avatarContainer}>
            <img
              src="../foto/mi-foto.jpg"
              alt="avatar"
              class={styles.avatar}
            />
            <h3 class={styles.title}>Diego Marchandon</h3>
            <p class={styles.subtitle}>Full-stack Developer</p>
          </div>

          <div class={styles.data}>
            <div class={styles.logoContainer}>
              <img class={styles.logo} src='../logos/locationLogo.png' />
              <h5 class={styles.logoText}>
                {/* {locale === 'es' ? 'Localización' : 'Location'} */}
                {localeSwitch[locale].location}
              </h5>
              <p>Neuquén </p>
            </div>
            <div class={styles.logoContainer}>
              <img class={styles.logo} src='../logos/focusLogo.png' />
              <h5 class={styles.logoText}>
                {/* {locale === 'es' ? 'Enfocado en' : 'Currently focused on'} */}
                {localeSwitch[locale].focusOn}
              </h5>
              <p>
                {/* {locale === 'es'
                  ? 'Incorporar Docker y testing con PHPUnit'
                  : 'Incorporating Docker and testing with PHPUnit'} */}
                {localeSwitch[locale].purpose}
              </p>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}