import styles from "./Notification.module.css";


export default function Notification() {
  return(
    <>
    <div className={styles.notificacionGreen}>
      <p className={styles.textNotification}>Juego agregado exitosamente</p>
      <button className={styles.btnNotification}><img className={styles.imgNotification} src="../../../public/close-icon.svg" /></button>
    </div>

    <div className={styles.notificacionGreen}>
        <p className={styles.textNotification}>Juego modificado exitosamente</p>
        <button className={styles.btnNotification}><img className={styles.imgNotification} src="../../../public/close-icon.svg" /></button>
    </div>

    <div className={styles.notificacionGreen}>
        <p className={styles.textNotification}>Juego eliminado exitosamente</p>
        <button className={styles.btnNotification}><img className={styles.imgNotification} src="../../../public/close-icon.svg" /></button>
    </div>

    <div className={styles.notificacionRed}>
      <p className={styles.textNotification}>Error al agregar un juego</p>
      <button className={styles.btnNotification}><img className={styles.imgNotification} src="../../../public/close-icon.svg" /></button>
    </div>

    <div className={styles.notificacionRed}>
        <p className={styles.textNotification}>Error al modificar un juego</p>
        <button className={styles.btnNotification}><img className={styles.imgNotification} src="../../../public/close-icon.svg" /></button>
    </div>

    <div className={styles.notificacionRed}>
        <p className={styles.textNotification}>Error al eliminar un juego</p>
        <button className={styles.btnNotification}><img className={styles.imgNotification} src="../../../public/close-icon.svg" /></button>
    </div>
    
    
    </>
  
  
  
  
  );
}
