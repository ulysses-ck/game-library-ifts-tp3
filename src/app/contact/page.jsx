import styles from "./contact.module.css";


export default function page() {
  return (
    <div className={styles.completeText}>
      <h1 className={styles.mainTitle}>¡Contactanos y hagamos un proyecto juntos!</h1>
      <div className={styles.paragraphs}>
        <p>
          Gracias por visitar Proyecto Videojuegos, nos encanta que estés acá. 
          Si tenes alguna propuesta y deseas nuestra colaboración, no dudes en 
          contactarnos en nuestras redes sociales, nos encantaría poder ayudarte a concretar tu idea. 
          También podes pasar por nuestros portfolios para conocer más a cerca 
          de nuestros proyectos individuales y las herramientas que manejamos. 
          ¡Esperamos saber pronto de vos!
        </p>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.secondaryContainer}>
          <img src="ulises.png" className= {styles.imageShape}/>
          <div className={styles.nameStyle}>Ulises Apaza</div>
          <div className={styles.nameStyle}>Full Stack Developer</div>
          <div class={styles.socialFollow}>
            <div class={styles.thirdContainer}>
                <a href="https://www.linkedin.com/in/ulisesapaza/">
                    <img src="linkedin.png" alt="Logo Linkedin" className={styles.logoSize}/>
                </a>
                <a href="https://github.com/ulysses-ck">
                    <img src="github.png" alt="Logo Github" className={styles.logoSize}/>
                </a>
            </div>
          </div>        
        </div>

        <div className={styles.secondaryContainer}>
          <img src="enzo.png" className= {styles.imageShape}/>
          <div className={styles.nameStyle}> Enzo Barosi</div>
          <div className={styles.nameStyle}>Full Stack Developer</div>
          <div class={styles.socialFollow}>
            <div class={styles.thirdContainer}>
              <a href="https://www.linkedin.com/in/enzo-barosi/">
                    <img src="linkedin.png" alt="Logo Linkedin" className={styles.logoSize}/>
              </a>
              <a href="https://github.com/enzojb">
                  <img src="github.png" alt="Logo Github" className={styles.logoSize}/>
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.secondaryContainer}>
          <img src="nicolas.png" className= {styles.imageShape}/>
          <div className={styles.nameStyle}>Nicolas Reparas</div>
          <div className={styles.nameStyle}>Full Stack Developer</div>
          <div>
          <div class={styles.socialFollow}>
            <div class={styles.thirdContainer}>
            <a href="https://www.linkedin.com/in/nicolas-perez-reparaz">
                    <img src="linkedin.png" alt="Logo Linkedin" className={styles.logoSize}/>
                </a>
                <a href="https://github.com/NicoRepa">
                    <img src="github.png" alt="Logo Github" className={styles.logoSize}/>
                </a>
            </div>
          </div>
          </div>
        </div>

        <div className={styles.secondaryContainer}>
          <img src="anitaAvatar.jpg" className= {styles.imageShape}/>
          <div className={styles.nameStyle}>Analia Fernández</div>
          <div className={styles.nameStyle}>Frontend Developer</div>
          <div>
          <div class={styles.socialFollow}>
            <div class={styles.thirdContainer}>
            <a href="https://www.linkedin.com/in/analia-guadalupe-fernández">
                    <img src="linkedin.png" alt="Logo Linkedin" className={styles.logoSize}/>
                </a>
                <a href="https://github.com/AnaliaGF">
                    <img src="github.png" alt="Logo Github" className={styles.logoSize}/>
                </a>
            </div>
          </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
