"use client";

import { useState } from "react";
import Image from "next/image";
import imgLogo from "../../../public/b641409e68c926216258f38c03c32ada.png";
import ImageContainer from "../ImageContainer";
import styles from "./Header.module.css";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { title: "Inicio", path: "/" },
    { title: "Agregar juego", path: "/add" },
    { title: "Buscar juego", path: "/search" },
    { title: "Acerca de", path: "/about" },
    { title: "Contacto", path: "/contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.brandHeader}>
        <ImageContainer width={90}>
          <Image src={imgLogo} alt="Logo" />
        </ImageContainer>
        <h2>Proyecto Videojuegos</h2>
      </div>
      <button
        className={styles.menuIcon}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </button>
      <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <ul>
          {navLinks.map((navLink) => (
            <li key={navLink.title} className="capitalize">
              <Link href={navLink.path} onClick={handleLinkClick}>
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
