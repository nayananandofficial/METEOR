import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const DraggableButton = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const x = useMotionValue(0); // Track drag distance

  const handleDragEnd = (e, info) => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    if (info.point.x > containerWidth * 0.6) {
      navigate("/products");
    } else {
      // Snap back
      animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  // Fill % based on drag distance
  const fillPercent = useTransform(x, [0, 200], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-50 touch-none"
    >
      <motion.div
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{ x }}
        className="relative px-6 py-3 border border-black dark:border-white rounded-full cursor-grab select-none overflow-hidden backdrop-blur-md bg-white/40 dark:bg-white/10 text-black dark:text-white"
        whileTap={{ scale: 0.95 }}
        whileDrag={{ cursor: "grabbing" }}
      >
        {/* Fill Background */}
        <motion.div
          style={{ width: fillPercent }}
          className="absolute inset-0 h-full bg-black dark:bg-white"
        />

        {/* Text on top */}
        <span className="relative z-10 text-md sm:text-lg font-medium tracking-wide">
          Drag to Learn more →
        </span>
      </motion.div>
    </div>
  );
};

export default DraggableButton;
