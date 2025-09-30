"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
/**
 * @param {{ 
 *   children: ReactNode, 
 *   delay?: number, 
 *   duration?: number, 
 *   onComplete?: () => void 
 * }} props
 */
export const FadeInSection = ({
  children,
  delay = 0,
  duration = 1,
  onComplete,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        // ease: [0.25, 0.8, 0.25, 1],
      }}
      onAnimationComplete={onComplete}
    >
      {children}
    </motion.div>
  );
};
// "use client";
// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// type Props = {
//   children: ReactNode;
//   delay?: number;
//   duration?: number;
//   onComplete?: () => void; 
// };

// export const FadeInSection = ({
//   children,
//   delay = 0,
//   duration = 0.8,
//   onComplete,
// }: Props) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 100, scale: 0.95 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{
//         duration: duration,
//         delay,
//         ease: [0.25, 0.8, 0.25, 1],
//       }}
//       onAnimationComplete={onComplete} 
//     >
//       {children}
//     </motion.div>
//   );
// };