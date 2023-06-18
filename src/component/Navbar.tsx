import { NavLinkData } from "../assets";
import { AiOutlineCaretDown} from "react-icons/ai" ; 

const Navbar = () => {
    return(
        <div className="bg-white shadow-lg h-20 ">
            <div className="flex justify-around items-center">
                <div>
                    <img src={NavLinkData[3].img} alt="" />
                </div>
                <div>
                    <ul className="flex text-[#4B4B4B] text-['Montserrat'] cursor-pointer">
                    <AiOutlineCaretDown className="absolute ml-[23rem] mt-7"/>
                            {
                                NavLinkData.map((navLink) => (
                                    <li className="hover:text-slate-900 duration-300 p-6">
                                        
                                        {navLink.title}
                                       
                                    </li>   
                                ))
                            }
                    </ul>
                </div>
                <div className="flex items-center">
                    <img src={NavLinkData[2].img} alt="" />
                    <p className="ml-2 text-[#4B4B4B]">Afif Subarkah</p><span className=" cursor-pointer ml-2"><AiOutlineCaretDown/></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;