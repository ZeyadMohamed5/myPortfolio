import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const getRandomColor = () => {
  const colors = ["bg-white", "bg-blue-300", "bg-purple-200"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        id: Math.random().toString(36).substring(2) + Date.now().toString(36),
        top: 10 + Math.random() * 70, // from 10% to 80%
        left: Math.random() * 100,
        duration: 3 + Math.random() * 4, // Range: 3s to 7s
        color: getRandomColor(),
        width: 1 + Math.random() * 1,
        height: 40 + Math.random() * 40,
      };

      setStars((prev) => {
        const updated = [...prev, newStar];
        if (updated.length > 50) {
          updated.shift();
        }
        return updated;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 1, x: 0, y: 0, rotate: -45 }}
          animate={{ opacity: [0, 1, 0], x: 100, y: 150, rotate: -45 }}
          transition={{ duration: star.duration, ease: "easeOut" }}
          onAnimationComplete={() => {
            setStars((prev) => prev.filter((s) => s.id !== star.id));
          }}
          className={`absolute ${star.color} blur-xs`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.width}px`,
            height: `${star.height}px`,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
