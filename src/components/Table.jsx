import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

const Table = ({books}) => {



    return (
        <table className="book__table w-full border-collapse">
            <thead>
                <tr>
                    <th className="border-t border-b border-gray-300 p-3 text-left">Judul Buku</th>
                    <th className="border-t border-b border-gray-300 p-3 text-left">Penerbit</th>
                    <th className="border-t border-b border-gray-300 p-3 text-left">Tahun Terbit</th>
                    <th className="border-t border-b border-gray-300 p-3 text-left">Aksi</th>
                </tr>
            </thead>
            <tbody>
                {books
                    .map(((item, i) => (
                        <tr key={i}>
                            <td className="border-t border-b border-gray-300 p-3 md:text-base text-[15px]">{item.judul}</td>
                            <td className="border-t border-b border-gray-300 p-3 md:text-base text-[15px]">{item.penerbit}</td>
                            <td className="border-t border-b border-gray-300 p-3 md:text-base text-[15px]">{item.tahun_terbit}</td>
                            <td className="action border-t border-b border-gray-300 p-3 text-[#9E9999] text-base">
                                <UpdateModal />
                                <DeleteModal />
                            </td>
                        </tr>
                    )))}
            </tbody>

        </table>
    );
}

export default Table;