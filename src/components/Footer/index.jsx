import styles from "./Footer.module.css";
import ImageContainer from "../ImageContainer";
import Image from "next/image";
import imgLogo from "../../../public/b641409e68c926216258f38c03c32ada.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.brandFooter}>
            <ImageContainer width={54}>
            <Image src={imgLogo} alt="Logo" />
            </ImageContainer>
            <h2>Proyecto Videojuegos</h2>
            </div>
            <div className={styles.menu}>
                <p>Menu</p>
                <ul>
                    <li><Link  href={`/`}>Inicio</Link></li>
                    <li><Link  href={`/add`}>Agregar Juego</Link></li>
                    <li><Link  href={`/about`}>Acerca de</Link></li>
                    <li><Link  href={`/contact`}>Contacto</Link></li>
                </ul>
            </div>



        </footer>
    )
}