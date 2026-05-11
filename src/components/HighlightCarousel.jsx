import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Play, Pause } from "lucide-react";
import { useInView, motion } from "framer-motion";

const HighlightCarousel = ({ features }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);

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

  // Timer refs let us cancel autoplay work across slide changes without rerendering.
  const animateProgress = useCallback(
    (duration) => {
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
    },
    [isPlaying],
  );

  // Autoplay logic with dynamic timing based on the current slide
  const autoplay = useCallback(() => {
    if (!emblaApi || !isPlaying) return;

    // Embla can emit several events around one transition. Clear old timers first.
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
  }, [animateProgress, emblaApi, isPlaying]);

  useEffect(() => {
    if (!emblaApi) return;

    const currentFeature = features[selectedIndex];
    const currentVideo = videoRefs.current[selectedIndex];

    // Hidden video slides should not keep playing after the active index moves.
    clearTimeout(intervalRef.current);
    cancelAnimationFrame(rafRef.current);

    if (currentFeature?.bgType === "video" && currentVideo) {
      if (isPlaying) {
        currentVideo.play().catch(() => {});
      } else {
        currentVideo.pause();
      }
    }

    if (isPlaying) autoplay();

    return () => {
      clearTimeout(intervalRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [autoplay, emblaApi, features, isPlaying, selectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", update);
    update();

    return () => {
      emblaApi.off("select", update);
    };
  }, [emblaApi]);

  const updateParallax = useCallback(() => {
    if (!emblaApi) return;

    const scrollProgress = emblaApi.scrollProgress();
    // Embla's normalized progress keeps the text offset stable across drag and autoplay.
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

    return () => {
      emblaApi.off("scroll", updateParallax);
      emblaApi.off("resize", updateParallax);
    };
  }, [emblaApi, updateParallax]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="embla relative w-full overflow-hidden"
    >
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
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
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
                    ref={(el) => {
                      layerRefs.current[index] = el;
                    }}
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

          <button
            type="button"
            className="absolute bottom-4 right-4 z-30 bg-white/80 dark:bg-black/50 p-2 rounded-full shadow-md backdrop-blur-md"
            onClick={() => setIsPlaying((playing) => !playing)}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
            {features.map((feature, i) => (
              <button
                key={feature.title}
                type="button"
                className={`w-2 h-2 rounded-full ${
                  selectedIndex === i ? "bg-black dark:bg-white" : "bg-gray-400"
                }`}
                onClick={() => emblaApi?.scrollTo(i)}
              />
            ))}
          </div>

          <div className="absolute top-0 left-0 h-1 w-full bg-gray-300/60 dark:bg-gray-700/60 z-20">
            <div
              className="h-full bg-gradient-to-r from-black to-neutral-700 dark:from-white dark:to-gray-100 transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      )}
    </motion.div>
  );
};

export default HighlightCarousel;
