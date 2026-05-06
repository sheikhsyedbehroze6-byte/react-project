import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = '', delay = 0, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15, 
        delay: delay 
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
