import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useIsDesktop from "../hooks/useIsDesktop";
import Button from "../components/ui/Button";
import CountingNumber from "../components/animations/CountingNumber";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible";
import HighlightCarousel from "../components/HighlightCarousel";
import DraggableButton from "../components/ui/DraggableButton";

const Home = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -30% 0px",
  });

  const isDesktop = useIsDesktop();

  const features = [
    {
      title: "Cutting-Edge Technology",
      description: "Latest process nodes and architectural innovations",
      bgType: "video",
      bgSrc: "/home-highlight-carousel-vid.mp4",
    },
    {
      title: "High-Performance CPUs",
      description: "Advanced processors from METEOR 5 to flagship METEOR 9X",
      bgType: "image",
      bgSrc: "/home_highlight_carousel_cpu.webp",
    },
    {
      title: "Powerful Graphics",
      description: "METEOR Blaze series for gaming and professional workloads",
      bgType: "image",
      bgSrc: "/home_highlight_carousel_gcard.webp",
    },
    {
      title: "AI Processing",
      description: "METEOR Neuron X for machine learning acceleration",
      bgType: "image",
      bgSrc: "/home_highlight_carousel_ai.webp",
    },
  ];

  const metrics = [
    { label: "Products Launched", value: 7, suffix: "+" },
    { label: "Performance Increase", value: 95, suffix: "%" },
    { label: "Power Efficiency", value: 40, suffix: "%" },
    { label: "Countries", value: 50, suffix: "+" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-gray-900 to-primary-dark">
          {isDesktop && (
            <video
              className="absolute right-0 w-1/2 h-full object-cover"
              autoPlay
              muted
              playsInline
              preload="none"
              poster="/hero-bg-fallback.webp"
            >
              <source src="/hero-bg-vid.mp4" type="video/mp4" />
            </video>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-primary-dark/40" />
        </div>

        <div className="relative max-w-8xl mr-auto ml-12 px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl lg:text-9xl md:text-8xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                Computing Power
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience next-generation performance with
              <span className="px-2 bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
                METEOR
              </span>
              processors, graphics cards, and AI platforms designed to push the
              boundaries of what's possible.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Explore Products
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <HiPlay className="mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div> */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div> */}
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible className="text-center mb-16">
            <h2 className="text-gradient text-4xl md:text-5xl font-bold mb-6">
              METEOR
              <span className="text-black dark:text-white text-4xl md:text-5xl font-bold mb-6 pl-3">
                Product Lineup
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From entry-level to flagship performance, our comprehensive range
              of processors, graphics cards, and AI platforms delivers unmatched
              performance.
            </p>
          </FadeInWhenVisible>

          <HighlightCarousel features={features} />
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 dark:bg-black transition-colors duration-500">
        <div className="max-w-[360px] sm:max-w-[420px] md:max-w-[500px] mx-auto px-4">
          {/* Heading */}
          <FadeInWhenVisible className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight font-handwritten uppercase tracking-wider mb-2 text-black dark:text-white">
              PERFORMANCE
              <span className="text-gradient block text-3xl sm:text-4xl md:text-5xl font-extrabold italic font-handwritten">
                LIKE A PRO
              </span>
            </h2>
          </FadeInWhenVisible>

          {/* Tight Grid */}
          <div className="grid grid-cols-2 gap-[5px] bg-black/10 dark:bg-white/10 inset-shadow-sm rounded-3xl shadow-2xl dark:shadow-accent-purple overflow-hidden">
            {metrics.map((metric, index) => (
              <FadeInWhenVisible key={metric.label} delay={index * 0.1}>
                <div className="aspect-square w-full backdrop-blur-lg bg-white/70 dark:bg-white/5 border border-white/10 dark:border-white/5 transition-all duration-500 hover:scale-[1.01] flex flex-col items-center justify-center text-center overflow-hidden relative">
                  {/* Liquid Shine */}
                  <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-br from-white/10 via-transparent to-white/20 dark:from-white/5 dark:to-white/5 pointer-events-none" />

                  {/* Text Content */}
                  <div className="relative z-10 text-2xl sm:text-3xl font-bold text-black dark:text-white">
                    <CountingNumber
                      end={metric.value}
                      suffix={metric.suffix}
                      duration={2000 + index * 300}
                    />
                  </div>
                  <p className="relative z-10 text-xs sm:text-sm mt-1 text-black/80 dark:text-white/80 max-w-[80%]">
                    {metric.label}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Video Showcase run by the product */}
      <section className="py-24 dark:bg-black relative overflow-x-clip">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title */}
          <FadeInWhenVisible className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-handwritten uppercase text-black dark:text-white">
              Supported Across
              <span className="block italic font-bold text-4xl sm:text-5xl mt-1">
                All Platforms
              </span>
            </h2>
          </FadeInWhenVisible>
        </div>

        {/* Floating Media Layer */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-4 md:gap-0 px-4 sm:px-8"
        >
          {isInView && (
            <>
              {/* Video 1 - Left */}
              <div className="w-[420px] md:w-[660px] lg:w-[750px] aspect-video rounded-xl overflow-hidden shadow-2xl shadow-red-800 relative z-20 translate-x-[-50%] translate-y-[-10%]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/home_test_vid1_fallback.webp"
                  className="w-full h-full object-cover"
                >
                  <source src="/home-test-vid1.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Video 2 - Bottom Left */}
              <div className="w-[300px] sm:w-[400px] md:w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl shadow-blue-300 relative z-20 translate-x-[0%] md:translate-x-[0%] translate-y-[-60%]  md:translate-y-[-60%] lg:translate-y-[-90%]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/home_test_vid2_fallback.webp"
                  className="w-full h-full object-cover"
                >
                  <source src="/home-test-vid2.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Video 3 - Right (biggest) */}
              <div className="w-[150px] sm:w-[200px] lg:w-[350px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] aspect-video rounded-xl overflow-hidden shadow-xl shadow-green-200 relative z-30 translate-x-[60%] md:translate-x-[5%] lg:translate-x-[35%] translate-y-[-150%] sm:translate-y-[-100%] md:translate-y-[-100%] lg:translate-y-[-80%]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/home_test_vid3_fallback.webp"
                  className="w-full h-full object-cover"
                >
                  <source src="/home-test-vid3.mp4" type="video/mp4" />
                </video>
              </div>
            </>
          )}
        </motion.div>

        {/* DEscription section */}
        <div className="text-center">
          {/* Description Text */}
          <p className="text-lg sm:text-xl text-black dark:text-white max-w-2xl mx-auto px-4 mb-10">
            Built for every developer, designer, and AI enthusiast — our
            platform powers creativity across all devices, operating systems,
            and performance tiers.
          </p>

          {/* Drag-to-navigate Button */}
          <DraggableButton />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience METEOR Performance?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Discover the perfect METEOR processor, graphics card, or AI
              platform for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Browse Our Products</Button>
              {/* <Button variant="outline" size="lg">
                Get Recommendations
              </Button> */}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
};

export default Home;
