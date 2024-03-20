import { useState } from "react";


const UpdateModal = () => {
    const [modal, setModal] = useState(false);

    const [judul, setJudul] = useState("")
    const [penerbit, setPenerbit] = useState("")
    const [tahun, setTahun] = useState("")

    const toggleModal = () => {
        setModal(!modal);
    };

    const isFormValid = () => {
        return (
            judul !== '' &&
            penerbit !== '' &&
            tahun !== ''
        );
    };

    const handleSubmit = (e) => {
        if (isFormValid()) {
            console.log('selamat anda berhasil')
        } else {
            e.preventDefault()
        }
    }
    return (
        <>
            <div onClick={toggleModal} className="tambah__btn bg-[#0270AF] hover:bg-[#078AE9] px-5 py-2 mb-4 flex items-center gap-2 rounded-lg text-white cursor-pointer">
                <i className="ri-add-box-line text-xl"></i>
                <p className="">Tambah Buku</p> 
            </div>


            {modal && (
                <div className="modal fixed inset-0 z-50 grid place-items-center">
                    <div onClick={toggleModal} className="overlay fixed inset-0 z-50 bg-[rgba(49,49,49,0.5)]"></div>

                    <div className="modal__content form__modal absolute lg:w-[510px] bg-white px-7 py-3.5 rounded-lg w-[300px] grid z-50">
                        <h2 className="modal__edit-title text-black mb-6 cursor-pointer text-2xl">Tambah Data Buku</h2>

                        <div className="form__edit">
                            <form onSubmit={handleSubmit}>
                                <label id="judul">Judul Buku <span className="text-red-600">*</span></label>
                                <input type="text" htmlFor="judul"
                                    value={judul}
                                    onChange={(e) => setJudul(e.target.value)}
                                    className="w-full px-5 py-3 mb-4 mt-2 inline-block border border-gray-400 rounded-lg" />

                                <label id="penerbit">Penerbit <span className="text-red-600">*</span></label>
                                <input type="text" htmlFor="penerbit"
                                    value={penerbit}
                                    onChange={(e) => setPenerbit(e.target.value)} 
                                    className="w-full px-5 py-3 mb-4 mt-2 inline-block border border-gray-400 rounded-lg"/>

                                <label id="tahun">Tahun Terbit <span className="text-red-600">*</span></label>
                                <input type="text" htmlFor="tahun"
                                    value={tahun}
                                    onChange={(e) => setTahun(e.target.value)} 
                                    className="w-full px-5 py-3 mb-4 mt-2 inline-block border border-gray-400 rounded-lg"/>


                                <div className="modal__edit-button form-button flex justify-between mt-4">
                                    <div onClick={toggleModal} className="modal__delete-no form__batalkan px-4 py-2 rounded-lg shadow-md text-[#0270AF] font-semibold cursor-pointer">Batalkan</div>
                                    <button type="submit" style={{ backgroundColor: isFormValid() ? '#0270AF' : 'lightgray' }} className="modal__submit form__submitborder-0 px-4 py-2 rounded-lg shadow-md text-white bg-[#0270AF] font-semibold">Tambah</button>
                                </div>

                            </form>
                        </div>


                    </div>
                </div>
            )}
        </>

    );
}

export default UpdateModal;