import { useState } from "react";

const SelectLimit = (props) => {
    const [showMenu, SetShowMenu] = useState('hidden');

    const toggleClass = () => {
        SetShowMenu(showMenu === 'hidden' ? '' : 'hidden');
    };

    return (
        <div className="select__limit">
            <span className="max-lg:hidden mr-2">Tampilkan </span>

        {/* <select onChange={(e) => props.onLimitChange(e.target.value)} className="change__limit">
            <option value="5">5 Data</option>
            <option value="10">10 Data</option>
            <option value="15">15 Data</option>
        </select> */}

        <div onClick={toggleClass} className={`dropdown__tampil relative px-2 py-1 border border-gray-300 rounded-full w-24 inline-block cursor-pointer`}>
            <div className="data__tampil w-full flex justify-between ml-1 h-6 items-center text-sm">
                {props.limit} Data
                <i className="ri-arrow-down-s-line absolute bottom-[4px] right-2 text-[1.3rem]"></i>
            </div>

            <div className={`${showMenu} select__data absolute flex flex-col border border-gray-300 bg-white w-24 left-0 top-10 rounded-lg px-0.5 text-xl`}>
                <div onClick={()=>props.onLimitChange(5)} className="select__item text-[.92rem] px-1 py-0.5 cursor-pointer hover:bg-gray-200">5 Data</div>
                <div onClick={()=>props.onLimitChange(10)} className="select__item text-[.92rem]  px-1 py-0.5 cursor-pointer hover:bg-gray-200">10 Data</div>
                <div onClick={()=>props.onLimitChange(15)} className="select__item text-[.92rem]  px-1 py-0.5 cursor-pointer hover:bg-gray-200">15 Data</div>
            </div>
        </div>

        </div>
    );
}

export default SelectLimit;