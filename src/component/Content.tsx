import {Link, NavLink} from 'react-router-dom';


const Content = () => {
    return(
        <div>
            <Link to='/'></Link>
            <div className="bg-white w-[80rem] mx-auto mt-5 rounded-lg shadow-lg py-5">
            
                <ul className="flex">
                    <li className="ml-5 text-[30px] text-[#002157] hover:text-blue-400 cursor-pointer duration-500">
                        <NavLink to='/'>Riwayat Pembelian</NavLink>
                    </li>
                    <li className="text-[#002157] text-[30px] ml-5 hover:text-blue-400 cursor-pointer duration-500">
                        <NavLink to='/jadwal'>Jadwal</NavLink>
                    </li>
                    <li className="text-[#002157] text-[30px] ml-5 hover:text-blue-400 cursor-pointer duration-500">
                        <NavLink to='/kelas'>Kelas</NavLink>
                    </li>
                    <li className="text-[#002157] text-[30px] ml-5 hover:text-blue-400 cursor-pointer duration-500">
                        <NavLink to='/webinar'>Webinar</NavLink> 
                    </li>
                    <li className="text-[#002157] text-[30px] ml-5 hover:text-blue-400 cursor-pointer duration-500">
                        <NavLink to='/konsultasi'>Konsultasi</NavLink> 
                    </li>
                    <li className="text-[#002157] text-[30px] ml-5 hover:text-blue-400 cursor-pointer duration-500">
                        <NavLink to='/kelasikut'>Kelas yang pernah di ikuti</NavLink> 
                    </li>
                </ul>
            </div>
         </div>
    )
}

export default Content;