import { useState } from "react"
import perfil from "../assets/pp.png"

const Header = ({toggle, showIcon}) => {
   const d = new Date()
   const months = ['January', 'February', 'Maret', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

   const month = months[d.getMonth()]
   const date = d.getDate()
   const year = d.getFullYear()

   const [showMenu, setShowMenu] = useState(false)

   const toggleClass = () => {
      setShowMenu(!showMenu)
    };

    return ( 
        <header className="header lg:pl-[310px] lg:h-[4.5rem] fixed top-0 left-0 w-full bg-white border-b border-gray-300 z-20">
         <div className="header__container container-xl lg:h-full px-8 mx-auto h-14 flex justify-between items-center">

            <div onClick={toggle} className={`${showIcon} header__toggle lg:hidden text-xl text-black relative`}>
               <i className={`${showIcon ? 'opacity-100' : 'opacity-0 rotate-90'} ri-menu-line nav__burger absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition duration-300 ease-linear`}></i>
               <i className={`${showIcon ? 'opacity-0' : 'opacity-100 rotate-90'} ri-close-line nav__close absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition ease-linear duration-300`}></i>
            </div>

            <div className="header__date flex gap-1 items-center border border-gray-300 rounded-lg px-2 py-1">
            <i className="ri-calendar-2-line text-xl"></i>
               <p>{date}</p>
               <p>{month}</p>
               <p>{year}</p>
            </div>

            <div  onClick={toggleClass} className="user__account max-lg:hidden cursor-pointer flex items-center gap-4 relative border border-gray-300 rounded-lg py-[3px] px-4 ">
               <figure>
               <img src={perfil} alt="image" className="rounded-full w-10" />
               </figure>

               <div className="user__data">
                  <h3 className="user__name font-semibold">Andika Saputra</h3>
                  <p className="user__role">Staff Admin</p>
               </div>

               <i className={`${showMenu} ri-arrow-down-s-line text-xl`}></i>

               <ul className={`${showMenu ? 'opacity-1' : 'opacity-0 pointer-events-none'} user__menu absolute bg-white top-16 right-0 p-4 rounded-lg border border-gray-200 w-full transition duration-300 ease-in-out`}>
                  <li className="user__profile flex items-center gap-2 text-lg font-semibold text-gray-600 border-b border-gray-200 pb-2 mb-2">
                  <i className="ri-settings-4-line text-[1.5rem] font-normal"></i>
                  Profile
                  </li>

                  <li className="user__logout flex items-center gap-2 text-lg font-semibold text-red-600">
                  <i className="ri-logout-circle-r-line text-[1.5rem] font-normal"></i>
                  Logout
                  </li>
               </ul>
            </div>
         </div>
      </header>
     );
}
 
export default Header;