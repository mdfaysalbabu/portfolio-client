"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    baseUrl: string;
    sectionId: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, baseUrl: string, sectionId: string) => {
    e.preventDefault();

    if (pathname === '/') {
      document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`${baseUrl}${sectionId}`);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed z-50 top-8 inset-x-0 mx-auto px-8 py-4 rounded-xl shadow-lg border border-accent/20",
          "backdrop-filter backdrop-blur-md bg-secondary/80",
          className
        )}
        style={{
          backdropFilter: "blur(20px) saturate(150%)",
          backgroundColor: "rgba(34, 40, 49, 0.85)",
          border: "1px solid rgba(52, 211, 153, 0.25)",
        }}
      >
        <div className="flex items-center justify-center space-x-8">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.baseUrl}
              onClick={(e) => handleNavItemClick(e, navItem.baseUrl, navItem.sectionId)}
              className={cn(
                "relative flex flex-col items-center text-white transition duration-300 transform hover:scale-110",
                "hover:text-accent group"
              )}
            >
              <motion.div
                className="text-2xl group-hover:animate-float"
                whileHover={{ scale: 1.2 }}
              >
                {navItem.icon}
              </motion.div>
              <span className="text-sm mt-2">{navItem.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Example usage of the FloatingNav component
const navItems = [
  { name: "Home", baseUrl: "/", sectionId: "#home", icon: <FaHome /> },
  { name: "About", baseUrl: "/", sectionId: "#about", icon: <FaUser /> },
  { name: "Skills", baseUrl: "/", sectionId: "#skills", icon: <FaCode /> },
  { name: "Projects", baseUrl: "/", sectionId: "#projects", icon: <FaProjectDiagram /> },
  { name: "Contact", baseUrl: "/", sectionId: "#contact", icon: <FaEnvelope /> },
];

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <FloatingNav navItems={navItems} />
      {/* Other sections of your page */}
    </div>
  );
}
