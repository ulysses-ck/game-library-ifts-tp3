import { deleteGame } from "@/app/actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";

const ConfirmationModal = ({ gameId, isOpen, setIsOpen }) => {
  const [state, action] = useFormState(deleteGame, { data: [], status: null });

  const handleCancel = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    if (state.status === 200) {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }
  }, [state.status]);

  return (
    <div
      className={`fixed inset-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative w-auto max-w-md mx-auto my-6">
        <div className="relative flex flex-col bg-white border-2 border-gray-300 shadow-lg rounded-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h3 className="text-2xl font-semibold">
              Confirmar eliminación de juego
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={handleCancel}
            >
              <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-gray-600 text-lg leading-relaxed">
              ¿Estás seguro que deseas eliminar este juego? Esta acción no se
              puede deshacer.
            </p>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleCancel}
            >
              Cancelar
            </button>
            <form action={action}>
              <input
                type="text"
                name="Rank"
                id="Rank"
                defaultValue={gameId}
                className="hidden"
              />
              <button
                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Eliminar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
