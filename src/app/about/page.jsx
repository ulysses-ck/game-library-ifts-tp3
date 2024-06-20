import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
import styles from "./about.module.css";

export default function page() {
  return (
    <div className={styles.completeText}>
      <h1 className={styles.mainTitle}>Sobre nosotros</h1>
        <p className={styles.paragraphs}>
        Somos un grupo de estudiantes apasionados por los videojuegos y la tecnología, 
        que se conocieron cursando en un terciario de desarrollo de software. Nuestra 
        iniciativa surgió del deseo de crear un espacio donde cualquier persona, sin importar
        su nivel de conocimiento, pudiera acceder a una amplia base de datos de videojuegos.
          Así nació Proyecto Videojuegos.
        </p>
      
      <h2 className={styles.secondaryTitle}>Nuestro propósito</h2>
        <p className={styles.paragraphs}>
        Queremos que la información sobre videojuegos esté disponible para todos, ya sean fanáticos 
        empedernidos, coleccionistas, desarrolladores en busca de inspiración, o simplemente curiosos sobre la historia y evolución de los 
        videojuegos. Creemos que el acceso libre a la información fomenta la creatividad, 
        la innovación y una mayor apreciación de este arte interactivo.
        </p>

      <h2 className={styles.secondaryTitle}>Nuestro Proyecto</h2>
        <div className={styles.paragraphs}>
        Este proyecto es el resultado de meses de trabajo colaborativo. Utilizamos tecnologías 
        modernas para desarrollar una web que te permita:
        </div>
        <div className={styles.paragraphs}>
          <strong>Buscar y explorar:</strong> una base de datos con videojuegos de todas las épocas y 
          plataformas, donde podes consultar información detallada.
        </div>
        <div className={styles.paragraphs}>
          <strong>Crear y compartir:</strong> podes añadir nuevos videojuegos, contribuyendo a nuestra base de datos, 
          compartiendo tus conocimientos y descubrimientos con la comunidad.
        </div>
        <div className={styles.paragraphs}>
          <strong>Actualizar y mejorar:</strong> para mantener la información existente precisa y relevante, podes 
          editarla y actualizarla .
        </div>
        <div className={styles.paragraphs}>
          <strong>Eliminar contenido erróneo:</strong> con tu ayuda podremos mantener la calidad de la base de datos eliminando 
          información inexacta o duplicada.
        </div>
        <div className={styles.specialParagraph}>
        Gracias por ser parte de esta aventura con nosotros. ¡Esperamos que disfrutes explorando 
        nuestro sitio tanto como nosotros disfrutamos creándolo! 
        </div>
    </div>
  );
}
