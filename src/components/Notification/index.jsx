"use client";
import styles from "./Notification.module.css";
import closeSVG from "../../../public/close-icon.svg";
import Image from "next/image";
import { useState } from "react";

export default function Notification({ action, isSuccess }) {
  const [show, setShow] = useState(isSuccess);

  const handleOnClick = () => {
    setShow(false);
  };

  return (
    <div
      className={isSuccess ? styles.notificacionGreen : styles.notificacionRed}
      style={{ display: show ? "flex" : "none" }}
    >
      <p className={styles.textNotification}>
        {isSuccess ? `Éxito al ${action} Juego` : `Error al ${action} Juego`}
      </p>
      <button className={styles.btnNotification} onClick={handleOnClick}>
        <Image className={styles.imgNotification} src={closeSVG} alt="Close" />
      </button>
    </div>
  );
}
