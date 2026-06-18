"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personal } from "../constant/data";

export default function TypewriterText() {
  const titles = personal.titles;
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];

    if (!deleting && displayed === current) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }

    if (deleting && displayed === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % titles.length);
      return;
    }

    const speed = deleting ? 35 : 75;
    const t = setTimeout(() => {
      setDisplayed(
        deleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(t);
  }, [displayed, deleting, index, titles]);

  return (
    <span style={{ color: "#00d4ff" }}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        style={{ color: "#00d4ff", marginLeft: 1 }}
      >
        |
      </motion.span>
    </span>
  );
}
