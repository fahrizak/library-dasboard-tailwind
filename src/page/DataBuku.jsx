import { useState, useEffect } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import SelectLimit from "../components/SelectLimit";
import AddModal from "../components/AddModal"
import { getBooks, getLength } from "../api";

const DataBuku = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [search, setSearch] = useState("")

  const filteredBooks = getBooks(currentPage, limit, search)

  let totalPage = Math.ceil(getLength(search) / limit)

  useEffect(() => {
    if (currentPage >= totalPage) {
      setCurrentPage(totalPage)
    } else {
      return
    }
  }, [limit])

  useEffect(() => {
    if (search.length > 0) {
      setCurrentPage(1)
    }
  }, [search])


  function handlePageChange(value) {
    if (value === "... ") {
      setCurrentPage(1)
    } else if (value === "leftArrow") {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1)
      }
    } else if (value === "rightArrow") {
      if (currentPage !== totalPage) {
        setCurrentPage(currentPage + 1)
      }
    } else if (value === " ...") {
      setCurrentPage(totalPage)
    } else {
      setCurrentPage(value)
    }
  }


  return (
    <section className=" lg:pl-[310px] lg:pt-24 mb-14 overflow-y-auto px-6 pt-[4.5rem]">

      <div className=" flex justify-between items-center">
        <h2 className="  text-gray-500 font-semibold text-xl mb-4">Data Buku</h2>
        <AddModal />
      </div>

      <div className=" bg-white w-full overflow-x-auto rounded-lg border border-gray-300">
        <div className="flex justify-between items-center p-4">
          <div className="">
            <SelectLimit onLimitChange={setLimit} limit={limit} />
          </div>

          <div className=" relative">
            <input type="text" placeholder="Search ..." onChange={(e) => setSearch(e.target.value)} className=" rounded-lg px-3 py-1 border border-gray-300 w-[140px]" />
            <i className="ri-search-line absolute right-3 top-[6px] text-base text-gray-500"></i>
          </div>
        </div>

        <Table books={filteredBooks} />

        <Pagination
          totalPage={totalPage} currentPage={currentPage} limit={limit} siblings={1}
          onPageChange={handlePageChange} dataLength={getLength(search)} />
      </div>
    </section>
  );
}

export default DataBuku;