"use client"

import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import {useEffect, useState} from 'react';
import styles from '../../styles/reactStyles/PixelCard.module.css';

export default function PixelCard(){

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

return (
    <div className={styles.container}>
      <motion.div
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => { setIsHover(false); x.set(0); y.set(0); }}
        style={{ rotateX, rotateY }}
        animate={{ scale: isHover ? 1.05 : 1 }}
      >

        {/* Fondo */}
        {/* <img src="/dni-bg.png" className={styles.bg} /> */}

        {/* Brillo animado */}
        <motion.div
          className={styles.shine}
          animate={controls}
        />

        {/* Contenido */}
        <div className={styles.content}>
          <img
            src="/mi-foto.jpg"
            alt="avatar"
            className={styles.avatar}
          />

          <div className={styles.data}>
            <h3>Diego Marchandon</h3>
            <p>Full-stack & Mobile Developer</p>
          </div>
        </div>

      </motion.div>
    </div>
  );
}