import { NavLinkData } from "../assets";


const Footer = () => {
    return(
        <div className="bg-[#002157] w-full h-[389px] mt-10 flex justify-around">
            <div className="mt-16">
                <h1 className="text-[#FFFFFF] text-['Montserrat'] font-[600] text-[16px]">Hall Of Collaborator</h1>
                <img src={NavLinkData[1].images} alt="" className="mt-10"/>
            </div>
            <div className="mt-16">
                <p className="text-[16px] font-[600] text-['Montserrat'] text-[#FFFFFF]">Contact Us</p>
                <p className="font-[300] text-white mt-5">Jakarta <span className="text-[16px] font-[600] text-['Montserrat'] text-[#FFFFFF]">7435 46</span></p>
                <p className="font-[300] text-white">Po box <span className="text-[16px] font-[600] text-['Montserrat'] text-[#FFFFFF]">018000 184646</span></p>
                <p className="font-[300] text-white mt-5">Phone<span className="text-[16px] font-[600] text-['Montserrat'] text-[#FFFFFF]">+62 8000 184646</span></p>
            </div>
            <div className="mt-16">
                <p className="text-[16px] font-[600] text-['Montserrat'] text-[#FFFFFF]">Addres</p>
                <p className="text-[16px] font-[300] text-['Montserrat'] text-[#FFFFFF] mt-5">JL K.H Abdullah No 57B</p>
                <p className="text-[16px] font-[600] text-['Montserrat'] text-[#FFFFFF]">Jakarta selatan</p>
            </div>
            <div className="mt-16">
                <p className="text-[16px] font-[600] text-['Montserrat'] text-[#FFFFFF]">Sosial media bawahnya</p>
                <div className="flex gap-10">
                    <img src={NavLinkData[2].images} alt="" className="mt-5" />
                    <img src={NavLinkData[0].images} alt=""  className="mt-5"/>
                </div>
            </div>
            <p className=" absolute mt-[23rem] text-['Montserrat'] text-[#FFFFFF] text-[14px] font-[600]">Copyright © 2021 Konseling Satir Indonesia</p>
        </div>
    )
}

export default Footer;