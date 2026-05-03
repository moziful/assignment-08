"use client";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Upgrade Your Skills Today!",
    description:
      "Build real-world confidence with practical lessons, guided paths, and a smooth learning experience.",
  },
  {
    title: "Learn from Industry Experts",
    description:
      "Get inspired by experts who share current tools, workflows, and proven strategies that help you grow faster.",
  },
];
const HeroSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    const interval = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => {
      window.clearInterval(interval);
    };
  }, []);
  const slide = slides[slideIndex];
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto min-h-[70vh] w-full max-w-7xl overflow-hidden rounded-3xl border border-base-300 bg-zinc-950 shadow-lg sm:min-h-[80vh] lg:min-h-[85vh]">
        <Image
          src="/hero-banner.png"
          alt="Students learning on SkillSphere"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/20 to-black/60" />
        <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-black/75 via-black/50 to-transparent lg:w-3/5" />
        <div className="relative z-10 flex min-h-[70vh] items-center sm:min-h-[80vh] lg:min-h-[85vh]">
          <div className="ml-auto flex w-full justify-end px-6 py-10 sm:px-10 lg:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.title}
                className="max-w-xl text-white sm:max-w-2xl lg:max-w-xl"
                initial={{ opacity: 0, y: 12, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.99 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <span className="mb-4 inline-flex w-fit rounded-full border border-white/25 bg-green-500/50 px-4 py-1 text-xs font-medium tracking-wide">
                  Enrollement Ongoing! Join today.
                </span>
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-5 max-w-lg text-base leading-7 text-white/90 sm:text-lg">
                  {slide.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/courses" className="btn btn-primary">
                    Explore Courses
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="btn btn-outline text-white hover:text-white"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
