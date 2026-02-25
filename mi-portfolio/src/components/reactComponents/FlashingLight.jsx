import {motion} from 'framer-motion';

export default function FlashingLight(){
    return (
        <motion.span
            style={{ width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block', marginRight: '5px'}}
            initial={{backgroundColor: '#2c9a00'}}
            animate={{backgroundColor: '#26ff00'}}
            transition={{duration: 1, repeat: Infinity, repeatType: 'reverse'}}
        />
    );
}