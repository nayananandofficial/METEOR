import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Play, Pause } from "lucide-react";
import { useInView, motion } from "framer-motion";

const HighlightCarousel = ({ features }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);
  const rafRef = useRef(null);
  const videoRefs = useRef([]);
  const layerRefs = useRef([]);
  const startTimeRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -30% 0px",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Animate progress bar
  const animateProgress = (duration) => {
    const loop = () => {
      if (!startTimeRef.current) startTimeRef.current = Date.now();
      const elapsed = Date.now() - startTimeRef.current;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (elapsed < duration && isPlaying) {
        rafRef.current = requestAnimationFrame(loop);
      }
    };
    rafRef.current = requestAnimationFrame(loop);
  };

  // Autoplay logic
  const autoplay = useCallback(() => {
    if (!emblaApi) return;

    //Reset only if we're playing
    if (isPlaying) {
      clearTimeout(intervalRef.current);
      cancelAnimationFrame(rafRef.current);

      const currentIndex = emblaApi.selectedScrollSnap();
      const delay = currentIndex === 0 ? 14000 : 5000;

      startTimeRef.current = null;
      setProgress(0);
      animateProgress(delay);

      intervalRef.current = setTimeout(() => {
        emblaApi.scrollNext();
      }, delay);
    }
  }, [emblaApi, isPlaying]);

  // Sync play/pause
  useEffect(() => {
    if (!emblaApi) return;

    const currentIndex = emblaApi.selectedScrollSnap();
    const currentFeature = features[currentIndex];
    const currentVideo = videoRefs.current[currentIndex];

    clearTimeout(intervalRef.current);
    cancelAnimationFrame(rafRef.current);

    if (currentFeature.bgType === "video" && currentVideo) {
      isPlaying ? currentVideo.play().catch(() => {}) : currentVideo.pause();
    }

    if (isPlaying) autoplay();

    return () => {
      clearTimeout(intervalRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying, selectedIndex, autoplay, features]);

  // Update selected index
  useEffect(() => {
    if (!emblaApi) return;
    const update = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", update);
    update();
  }, [emblaApi]);

  // Parallax effect
  const updateParallax = useCallback(() => {
    if (!emblaApi) return;
    const scrollProgress = emblaApi.scrollProgress();

    layerRefs.current.forEach((layer, i) => {
      if (!layer) return;
      const offset = (i - scrollProgress * (features.length - 1)) * -40;
      layer.style.transform = `translateX(${offset}px)`;
    });
  }, [emblaApi, features.length]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("scroll", updateParallax);
    emblaApi.on("resize", updateParallax);
    updateParallax();
  }, [emblaApi, updateParallax]);

  return (
    <motion.div 
    ref={sectionRef} 
    initial={{opacity: 0}}
    animate={isInView ? {opacity: 1} : {}}
    transition={{ duration: 0.8 }}
    className="embla relative w-full overflow-hidden">
      {isInView && (
        <>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="min-w-full flex-shrink-0 parallax relative h-[200px] md:h-[300px] lg:h-[500px]"
                >
                  {feature.bgType === "image" ? (
                    <img
                      src={feature.bgSrc}
                      alt=""
                      loading='lazy'
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      muted
                      playsInline
                      preload="none"
                      poster="/home_carousel_fallback.webp"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                    >
                      <source src={feature.bgSrc} type="video/mp4" />
                    </video>
                  )}

                  <div
                    ref={(el) => (layerRefs.current[index] = el)}
                    className="parallax__layer relative z-10 p-10 max-w-2xl text-white xs:p-4 xs:text-center"
                  >
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-gradient">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Play / Pause Button */}
          <button
            className="absolute bottom-4 right-4 z-30 bg-white/80 dark:bg-black/50 p-2 rounded-full shadow-md backdrop-blur-md"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
            {features.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full ${
                  selectedIndex === i ? "bg-black dark:bg-white" : "bg-gray-400"
                }`}
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
              />
            ))}
          </div>

          {/* Progress Bar */}
          {/* <div className="absolute top-0 left-0 h-1 w-full bg-gray-300 dark:bg-gray-700 z-20">
        <div
          className="h-full bg-gradient-to-r from-black to-neutral-700 dark:from-white dark:to-gray-100 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div> */}
        </>
      )}
    </motion.div>
  );
};

export default HighlightCarousel;
