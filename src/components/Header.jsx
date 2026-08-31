import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
const Header = () => {
    return (
        <>
         <header>
             <div className="w-full h-[32px] bg-gray-400 flex justify-center items-center gap-10">
                 <div className="flex">
                     <p className="text-[14px] text-black"><IoLocationOutline /> Toshkent</p>
                     <p>Topshirish punktlari</p>
                 </div>
                 <div className="">
                     <p>Sotuv bolimi</p>
                     <p>Topshirish punkitini ochosh </p>
                     <p>savol javob</p>
                     <p>Buyurtmalarim</p>
                     <p>O'zbekcha</p>
                 </div>
             </div>
         </header>
        </>
    );
};

export default Header;