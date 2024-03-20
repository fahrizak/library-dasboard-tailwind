import { useState} from "react";
import trash from "../assets/trash.json"
import Lottie from "lottie-react";


const DeleteModal = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };


    return (
        <>
            <i onClick={toggleModal} className="ri-delete-bin-line btn__delete hover:text-red-500"></i>


            {modal && (
                <div className="modal fixed inset-0 z-50 grid place-items-center">
                <div onClick={toggleModal} className="overlay fixed inset-0 z-50 bg-[rgba(49,49,49,0.5)]"></div>

                    <div className="modal__content delete__modal absolute lg:w-[510px] bg-white px-7 py-3.5 rounded-lg w-[300px] grid z-50">
                        <figure className="w-[150px] justify-self-center">
                        <Lottie animationData={trash} className="modal__delete-image" />
                        </figure>

                        <h2 className="modal__delete-title text-black text-center mb-4 font-bold">Hapus Data "Bumi Manusia"</h2>
                        <p className="modal__delete-description mb-6 text-black">
                        Apakah anda yakin untuk menghapus data bumi manusia secara permanen  ?    
                        </p>

                        <div className="modal__delete-button delete__button flex justify-between">
                        <div onClick={toggleModal} className="modal__delete-no form__batalkan px-4 py-2 rounded-lg shadow-md text-[#0270AF] font-semibold cursor-pointer">Batalkan</div>
                            <div className="modal__delete-yes delete__hapus px-4 py-2 rounded-lg shadow-md text-white bg-[#CE1C1C] cursor-pointer">Hapus Data</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default DeleteModal;