import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Parallax = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Update animation controls based on scroll position
      controls.start({ opacity: window.scrollY / window.innerHeight });
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default Parallax;
