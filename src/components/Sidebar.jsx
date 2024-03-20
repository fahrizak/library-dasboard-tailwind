import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import perfil from '../assets/pp.png'
import Dashboard from "../page/Dashboard";
import DataBuku from "../page/DataBuku";

const Sidebar = ({ toggle, showSidebar }) => {

  return (
    <BrowserRouter>
      <aside className={`${showSidebar} sidebar max-sm:w-60 fixed top-14 left-0 lg:top-0 lg:left-0 w-72 h-full bg-white border-r border-gray-300 transition-[left] duration-300 z-40`}>
        <nav className="sidebar__container flex flex-col gap-4 pb-12 h-full">
          <a href="#" className="sidebar__logo relative ml-14 py-4">
            <span className="inline-block font-['Inknut_Antiqua'] font-semibold text-[#078AE9] text-3xl">Dwipurna</span>
            <span className="inline-block font-['Jolly_Lodger'] font-normal text-orange-500 text-[32px] absolute max-sm:right-8 right-[70px] bottom-[-20px]">Library</span>
          </a>

          <div className="sidebar__content relative h-full mb-[100px] overflow-y-auto">

            <h3 className="sidebar__title text-gray-500 font-medium text-base m-6">
              <span>MENU UTAMA</span>
            </h3>

            <div className="sidebar__list flex flex-col">
              <NavLink to="/" onClick={toggle} className="sidebar__link flex gap-x-4 p-4 items-center font-semibold text-[#9E9999]">
                <i className="ri-team-line text-2xl pl-4 font-normal"></i>
                <span className="sidebar__link-name">Dashboard</span>
              </NavLink>
              <NavLink to="/book" onClick={toggle} className="sidebar__link flex gap-x-4 p-4 items-center font-semibold text-[#9E9999]">
                <i className="ri-book-2-line text-2xl pl-4 font-normal"></i>
                <span className="sidebar__link-name">Data Buku</span>
              </NavLink>
            </div>

            <h3 className="sidebar__title none lg:hidden text-gray-500 font-medium text-base m-6">
              <span>AKUN</span>
            </h3>

            <div className="sidebar__list none lg:hidden flex flex-col">
              <a href="#" className="sidebar__link flex gap-x-4 p-4 items-center font-semibold text-[#9E9999]">
                <i className="ri-account-circle-line text-2xl pl-4 font-normal"></i>
                <span className="sidebar__link-name">Profile</span>
              </a>
              <a href="#" className="sidebar__link flex gap-x-4 p-4 items-center font-semibold text-[#9E9999]">
                <i className="ri-logout-box-line text-2xl pl-4 font-normal"></i>
                <span className="sidebar__link-name">Logout</span>
              </a>
            </div>


          </div>

          <div className="sidebar__account none lg:hidden fixed bottom-0 bg-white flex items-center gap-x-2 p-4">
            <figure>
              <img src={perfil} alt="image" className='sidebar__perfil w-14 h-14 rounded-full border-2 border-white' />
            </figure>
            <div className="sidebar__names">
              <h3 className="sidebar__name font-bold">Andika Saputra</h3>
              <span className="sidebar__position text-sm">Staff Admin</span>
            </div>

            <i className="ri-arrow-right-s-line ml-2 text-xl"></i>
          </div>
        </nav>
      </aside>

      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="book" element={<DataBuku />} />
      </Routes>

    </BrowserRouter>
  );
}

export default Sidebar;