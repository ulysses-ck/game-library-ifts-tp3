import styles from "./contact.module.css";

export default function page() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className={`${styles.completeText} bg-white rounded-lg shadow-lg p-6`}>
          <h1 className="text-2xl font-bold text-center mb-6">¡Contáctanos y hagamos un proyecto juntos!</h1>
          <div className="mb-6 text-base text-gray-700 leading-relaxed">
            <p>
              Gracias por visitar Proyecto Videojuegos, nos encanta que estés aquí. Si tienes alguna propuesta y deseas nuestra colaboración, no dudes en contactarnos en nuestras redes sociales, nos encantaría poder ayudarte a concretar tu idea. También puedes pasar por nuestros portfolios para conocer más acerca de nuestros proyectos individuales y las herramientas que manejamos. ¡Esperamos saber pronto de ti!
            </p>
          </div>

          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="text-center">
                <img src="ulises.png" className={`${styles.imageShape} mx-auto mb-4`} alt="Ulises Apaza" />
                <div className="font-bold mb-2">Ulises Apaza</div>
                <div className="mb-2">Full Stack Developer</div>
                <div className="flex justify-center">
                  <a href="https://www.linkedin.com/in/ulisesapaza/" className="mr-2">
                    <img src="linkedin.png" alt="Logo Linkedin" className="w-8 h-8" />
                  </a>
                  <a href="https://github.com/ulysses-ck">
                    <img src="github.png" alt="Logo Github" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="text-center">
                <img src="enzo.png" className={`${styles.imageShape} mx-auto mb-4`} alt="Enzo Barosi" />
                <div className="font-bold mb-2">Enzo Barosi</div>
                <div className="mb-2">Full Stack Developer</div>
                <div className="flex justify-center">
                  <a href="https://www.linkedin.com/in/enzo-barosi/" className="mr-2">
                    <img src="linkedin.png" alt="Logo Linkedin" className="w-8 h-8" />
                  </a>
                  <a href="https://github.com/enzojb">
                    <img src="github.png" alt="Logo Github" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="text-center">
                <img src="nicolas.png" className={`${styles.imageShape} mx-auto mb-4`} alt="Nicolas Reparas" />
                <div className="font-bold mb-2">Nicolas Reparas</div>
                <div className="mb-2">Software Developer</div>
                <div className="flex justify-center">
                  <a href="https://www.linkedin.com/in/nicolas-perez-reparaz" className="mr-2">
                    <img src="linkedin.png" alt="Logo Linkedin" className="w-8 h-8" />
                  </a>
                  <a href="https://github.com/NicoRepa">
                    <img src="github.png" alt="Logo Github" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="text-center">
                <img src="anitaAvatar.jpg" className={`${styles.imageShape} mx-auto mb-4`} alt="Analia Fernández" />
                <div className="font-bold mb-2">Analia Fernández</div>
                <div className="mb-2">Frontend Developer</div>
                <div className="flex justify-center">
                  <a href="https://www.linkedin.com/in/analia-guadalupe-fernández" className="mr-2">
                    <img src="linkedin.png" alt="Logo Linkedin" className="w-8 h-8" />
                  </a>
                  <a href="https://github.com/AnaliaGF">
                    <img src="github.png" alt="Logo Github" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
