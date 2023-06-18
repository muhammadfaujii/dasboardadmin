import './App.css';
import Content from './component/Content';
import Jumbotron from './component/Jumbotron';
import Navbar from './component/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Riwayat from './pages/Riwayat';
import Jadwal from './pages/Jadwal';
import Kelas from './pages/Kelas';
import Webinar from './pages/Webinar';
import Konsultasi from './pages/Konsultasi';
import KelasIkut from './pages/KelasIkut';
import Footer from './component/Footer';

function App() {
  return (
    <div className='bg-[#D3D3D3]'>
      <Navbar/>
      <Jumbotron/>
        <BrowserRouter>
          <Content/>
            <Routes>
              <Route path='/' element={<Riwayat/>}/>
              <Route path='/jadwal' element={<Jadwal/>}/>
              <Route path='/kelas' element={<Kelas/>}/>
              <Route path='/webinar' element={<Webinar/>}/>
              <Route path='/konsultasi' element={<Konsultasi/>}/>
              <Route path='/kelasikut' element={<KelasIkut/>}/>
            </Routes>  
        </BrowserRouter>
        <Footer/>
    </div>

  );
}

export default App;
