import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";

const DraggableButton = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const x = useMotionValue(0); // Track drag distance

  const handleDragEnd = (e, info) => {
    // const containerWidth = containerRef.current?.offsetWidth || 0;
    if (info.point.x > 120) {
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
      className="fixed bottom-16 left-1/2 -translate-x-1/2 max-w-md z-50 touch-none"
    >
      <motion.div
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{ x }}
        className="relative flex items-center gap-4 px-6 py-3 border border-black dark:border-white rounded-full cursor-grab select-none overflow-hidden glass-effect bg-white/40 dark:bg-white/10 text-black dark:text-white"
        whileTap={{ scale: 0.95 }}
        whileDrag={{ cursor: "grabbing" }}
      >
        {/* Fill Background */}
        <motion.div
          style={{ width: fillPercent }}
          className="absolute inset-0 h-full bg-black dark:bg-white"
        />

        {/* Circle with arrow */}
        <div className="relative bg-black rounded-full w-9 h-9 flex items-center justify-center z-10 text-white dark:bg-white dark:text-black">
          →
        </div>

        {/* Text on top */}
        <span className="relative z-10 shimmer-wrapper">
          <span className="shimmer-base">Learn more</span>
          <span className="shimmer-overlay">Learn more</span>
        </span>
      </motion.div>
    </div>
  );
};

export default DraggableButton;
