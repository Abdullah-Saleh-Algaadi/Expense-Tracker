import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ isVisible = true }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 z-50"
        >
          <div className="flex flex-col items-center space-y-4">
            {/* Spinner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
            ></motion.div>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-white text-lg font-semibold"
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
