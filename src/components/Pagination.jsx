import { returnpaginationRange } from "../utils/appUtils";

const Pagination = ({totalPage, onPageChange, limit, currentPage, siblings, dataLength}) => {
    let array = returnpaginationRange(totalPage, currentPage, siblings)

    return (
        <div className=" lg:flex flex-row justify-between items-center px-4">
        <div className=" max-lg:hidden">
            Menampilkan {((currentPage - 1) * limit) + 1} - 
            {` ${ totalPage !== currentPage ?  currentPage * limit : dataLength} `} data dari 
            {" " + dataLength} data
        </div>

        <ul className=" flex text-sm gap-x-1 my-6 justify-center items-center">
            <span className="max-lg:hidden text-[#0270AF] font-medium text-base mx-4 cursor-pointer" onClick={()=>(onPageChange("leftArrow"))}>Sebelumnya</span>
            <li className="lg:hidden border border-gray-300 w-8 h-8 relative rounded-lg cursor-pointer" onClick={()=>(onPageChange("leftArrow"))}><i className="ri-arrow-left-s-line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i></li>
            {array.map((value) => {
                if ( value === currentPage) {
                    return (
                        <li key={value} onClick={()=>(onPageChange(value))} className="active-pagination border border-gray-300 w-8 h-8 grid place-items-center rounded-lg cursor-pointer">{value}</li>
                    )
                } else {
                    return (
                        <li key={value} className="border border-gray-300 w-8 h-8 grid place-items-center rounded-lg cursor-pointer" onClick={()=>(onPageChange(value))} >{value}</li>

                    )
                }
            })}
            <li className="lg:hidden border border-gray-300 w-8 h-8 relative rounded-lg cursor-pointer" onClick={()=>(onPageChange("rightArrow"))}><i className="ri-arrow-right-s-line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></i></li>
            <span className="max-lg:hidden text-[#0270AF] font-medium text-base mx-4 cursor-pointer" onClick={()=>(onPageChange("rightArrow"))}>Selanjutnya</span>
        </ul>
        </div>
    );
}

export default Pagination;