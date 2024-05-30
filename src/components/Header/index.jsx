import Image from "next/image";
import imgLogo from "../../../public/b641409e68c926216258f38c03c32ada.png";
import ImageContainer from "../ImageContainer";
import styles from "./Header.module.css";
import Link from "next/link";
export default function Header() {
  const navLinks = [
    { title: "Inicio", path: "/" },
    { title: "Agregar juego", path: "/add" },
    { title: "Acerca de", path: "/about" },
    { title: "Contacto", path: "/contact" },
  ];

  return (
    <header className={styles.headerContainer}>
      <div className={styles.brandHeader}>
        <ImageContainer width={54}>
          <Image src={imgLogo} alt="Logo" />
        </ImageContainer>
        <h2>Proyecto Videojuegos</h2>
      </div>
      <nav className="flex">
        <ul className="flex justify-around gap-1">
          {navLinks.map((navLink) => {
            return (
              <li key={navLink.title} className="capitalize">
                <Link href={navLink.path}>{navLink.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
