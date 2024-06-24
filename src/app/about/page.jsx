import styles from "./about.module.css";

export default function page() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className={`${styles.completeText} bg-white rounded-lg shadow-lg p-6`}>
          <h1 className="text-2xl font-bold text-center mb-6">Sobre nosotros</h1>
          <div className="mb-6">
            <p className="text-base text-gray-700 leading-relaxed">
              Somos un grupo de estudiantes apasionados por los videojuegos y la tecnología, que se conocieron cursando en un terciario de desarrollo de software. Nuestra iniciativa surgió del deseo de crear un espacio donde cualquier persona, sin importar su nivel de conocimiento, pudiera acceder a una amplia base de datos de videojuegos. Así nació Proyecto Videojuegos.
            </p>
          </div>

          <h2 className="text-xl font-bold mb-4">Nuestro propósito</h2>
          <div className="mb-6">
            <p className="text-base text-gray-700 leading-relaxed">
              Queremos que la información sobre videojuegos esté disponible para todos, ya sean fanáticos empedernidos, coleccionistas, desarrolladores en busca de inspiración, o simplemente curiosos sobre la historia y evolución de los videojuegos. Creemos que el acceso libre a la información fomenta la creatividad, la innovación y una mayor apreciación de este arte interactivo.
            </p>
          </div>

          <h2 className="text-xl font-bold mb-4">Nuestro Proyecto</h2>
          <div className="mb-4">
            <p className="text-base text-gray-700 leading-relaxed">
              Este proyecto es el resultado de meses de trabajo colaborativo. Utilizamos tecnologías modernas para desarrollar una web que te permita:
            </p>
          </div>
          <div className="mb-4">
            <p className="text-base text-gray-700 leading-relaxed">
              <strong>Buscar y explorar:</strong> una base de datos con videojuegos de todas las épocas y plataformas, donde puedes consultar información detallada.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-base text-gray-700 leading-relaxed">
              <strong>Crear y compartir:</strong> puedes añadir nuevos videojuegos, contribuyendo a nuestra base de datos, compartiendo tus conocimientos y descubrimientos con la comunidad.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-base text-gray-700 leading-relaxed">
              <strong>Actualizar y mejorar:</strong> para mantener la información existente precisa y relevante, puedes editarla y actualizarla.
            </p>
          </div>
          <div className="mb-4">
            <p className="text-base text-gray-700 leading-relaxed">
              <strong>Eliminar contenido erróneo:</strong> con tu ayuda podremos mantener la calidad de la base de datos eliminando información inexacta o duplicada.
            </p>
          </div>
          <div className="text-lg font-semibold text-center mb-4">
            Gracias por ser parte de esta aventura con nosotros. ¡Esperamos que disfrutes explorando nuestro sitio tanto como nosotros disfrutamos creándolo!
          </div>
        </div>
      </div>
    </div>
  );
}
