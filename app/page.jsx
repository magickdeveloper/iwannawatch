"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { setInterval } from "timers";
import { Button } from "@nextui-org/button";
import { FaArrowRight } from "react-icons/fa";
import { SearchInput } from "@/components/CustomInput";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const listOfMovies = [
    {
      url: "./front-page/drhouse.jpg",
    },
    {
      url: "./front-page/avenger.jpg",
    },
  ];

  const INTERVAL = 6000;

  const [movieIndex, setMovieIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setMovieIndex((prev) =>
        prev === listOfMovies.length - 1 ? 0 : prev + 1
      );
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <AnimatePresence>
        <motion.div
          key={movieIndex}
          initial={{ translateX: "100vw", opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          exit={{ translateX: "-100vw", opacity: 0 }}
          className={`absolute z-0 h-[calc(100vh-3rem)] top-12 w-full`}
          style={{
            backgroundImage: `url(${listOfMovies[movieIndex].url})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="absolute left-2 bottom-6">
            <Button
              color="secondary"
              className="text-xl font-semibold text-secondary-foreground"
              endContent={<FaArrowRight />}
            ></Button>
          </div>
        </motion.div>
      </AnimatePresence>
      <h1 className="z-10 text-3xl md:text-5xl">
        <span className="font-semibold text-primary">Find</span> movies and
        series to watch
      </h1>

      <SearchInput
        endContent
        onSubmit={(e) => {
          router.push(`/search?q=${e.search}`);
        }}
      />
    </section>
  );
}
