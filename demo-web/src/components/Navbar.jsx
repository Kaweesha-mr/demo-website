import React, {useState} from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {

    const [nav,setNav] = useState(true)

    const handleNav = ()=> {
        setNav(!nav)
    }

    return (
        <div className={"flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"}>
            <h1 className='w-full text-3xl font-bold text-[#00df98]'>React.</h1>

            <ul className={"hidden md:flex"}>
                <li className={"p-4"}>Home</li>
                <li className={"p-4"}>Company</li>
                <li className={"p-4"}>Resources</li>
                <li className={"p-4"}>About</li>
                <li className={"p-4"}>Contact</li>
            </ul>

            <div onClick={handleNav} className={'block md:hidden'}>
                {!nav ? <IoCloseOutline size={20} /> : <IoMdMenu size={20}/>}

            </div>

            <div className={!nav ? "fixed left-0 top-0 w-[60%] border-r border-r-[#f9f9f917] h-full bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]" }>
                <h1 className='w-full text-3xl font-bold text-[#00df98] m-4'>React.</h1>
                <ul className={"uppercase p-4 border-b border-[#f9f9f917]"}>
                    <li className={"p-4 border-b border-[#f9f9f917]"}>Home</li>
                    <li className={"p-4 border-b border-[#f9f9f917]"}>Company</li>
                    <li className={"p-4 border-b border-[#f9f9f917]"}>Resources</li>
                    <li className={"p-4 border-b border-[#f9f9f917]"}>About</li>
                    <li className={"p-4"}>Contact</li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar;