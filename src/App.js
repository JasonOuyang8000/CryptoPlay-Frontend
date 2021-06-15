import React from "react";
import { motion } from "framer-motion";


export default function App() {

  return (
   <div className="">
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 2 }}
  >
      Hello World

  </motion.div>

   </div>
  );
}