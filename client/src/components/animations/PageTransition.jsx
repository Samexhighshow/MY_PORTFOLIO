import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 40,
        scale: 0.98,
        filter: 'blur(15px)'
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] // Premium Apple-like cubic bezier
        }
    },
    out: {
        opacity: 0,
        y: -40,
        scale: 1.02,
        filter: 'blur(15px)',
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function PageTransition({ children }) {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="w-full h-full origin-top"
        >
            {children}
        </motion.div>
    );
}
