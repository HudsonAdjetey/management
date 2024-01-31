import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icons } from "../../constant/Icons";
const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.2 },
  },
};

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLinkClick = () => {
    // close the menu when a link is clicked or called
    if (menuRef && menuRef.current) {
      setIsOpen(!isOpen);
      menuRef.current.setAttribute("aria-expanded", !isOpen);
    }
  };
  useEffect(() => {
    // handleClick outside the menu
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    // Attach the click event listener when the menu is open
    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }
    // Detach the event or perform a cleaning
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className=" relative top-0"
      style={isOpen ? { height: "auto" } : { height: 0 }}
      ref={menuRef}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="headerMenu flex  w-full gap-4 items-center justify-end"
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },

          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="menu__ulLinks w-200 mt-5 bg-neutral-color text-[.9rem]  text-white"
      >
        <motion.li variants={itemVariants}>
          <Link
            className="inline-flex gap-5 font-normal w-full p-2  hover:bg-gray-200 hover:text-black"
            to={"/"}
            onClick={handleLinkClick}
          >
            <span>
              <Icons.dashboard />
            </span>
            <span>Dashboard</span>
          </Link>
        </motion.li>

        <motion.li variants={itemVariants}>
          <Link
            className="inline-flex gap-5 font-normal w-full p-2  hover:bg-gray-200 hover:text-black"
            to={"/"}
            onClick={handleLinkClick}
          >
            <span>
              <Icons.payment />
            </span>
            <span>Payment</span>
          </Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link
            className="inline-flex gap-5 font-normal w-full p-2  hover:bg-gray-200 hover:text-black"
            to={"/"}
            onClick={handleLinkClick}
          >
            <span>
              <Icons.register />
            </span>
            <span>Register Student</span>
          </Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link
            className="inline-flex gap-5 font-normal w-full p-2  hover:bg-gray-200 hover:text-black"
            to={"/"}
            onClick={handleLinkClick}
          >
            <span>
              <Icons.classes />
            </span>
            <span>Register Class</span>
          </Link>
        </motion.li>

        <motion.li variants={itemVariants}>
          <Link
            className="inline-flex gap-5 font-normal w-full p-2  hover:bg-gray-200 hover:text-black"
            to={"/"}
            onClick={handleLinkClick}
          >
            <span>
              <Icons.fees />
            </span>
            <span>Fees</span>
          </Link>
        </motion.li>

        <motion.li variants={itemVariants}>
          <Link
            className="inline-flex gap-5 font-normal w-full p-2  hover:bg-gray-200 hover:text-black"
            to={"/"}
            onClick={handleLinkClick}
          >
            <span>
              <Icons.settings />
            </span>
            <span>Settings</span>
          </Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link
            className="inline-flex gap-5 font-normal w-full p-2  hover:bg-gray-200 hover:text-black"
            to={"/"}
            onClick={handleLinkClick}
          >
            <span>
              <Icons.history />
            </span>
            <span>History</span>
          </Link>
        </motion.li>
        <motion.li className="Menucre__btns" variants={itemVariants}>
          <Link
            className=" my-4 inline-flex gap-5 font-normal w-full p-2  hover:bg-gray-200 hover:text-black"
            to={"/"}
            onClick={handleLinkClick}
          >
            <span>
              <Icons.logout />
            </span>
            <span>Logout</span>
          </Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default MobileNav;
