import styles from "./Notification.module.css";
import closeSVG from "../../../public/close-icon.svg";
import Image from "next/image";

export default function Notification({ action, isSuccess }) {
  return (
    <div
      className={isSuccess ? styles.notificacionGreen : styles.notificacionRed}
    >
      <p className={styles.textNotification}>
        {isSuccess
          ? `Éxito al ${action} Juego`
          : `Error al ${action} Juego`}
      </p>
      <button className={styles.btnNotification}>
        <Image className={styles.imgNotification} src={closeSVG} alt="Close" />
      </button>
    </div>
  );
}
