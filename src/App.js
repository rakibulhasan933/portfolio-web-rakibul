import './App.css';
import logo from './components/img/logo.png';
import moon from './components/img/moon.png';

function App() {
  return (
    <div className=" h-1/2 lg:h-screen bg-gradient-to-tr from-indigo-200">
      <nav className=" w-full fixed top-0 bg-white">
        <div className='container mx-auto py-5 flex  items-center justify-between'>
          <div className=" flex items-center gap-2">
            <img className=' w-8' src={logo} alt="logo" />
            <span className=' text-2xl font-bold text-indigo-900'>Rakibul</span>
          </div>
          <ul className=' hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase'>
            <li className=' hover:text-gray-500'>
              <a href="#">Homepages</a>
            </li>
            <li className=' hover:text-gray-500'>
              <a href="#">About me</a>
            </li>
            <li className=' hover:text-gray-500'>
              <a href="#">Services</a>
            </li>
            <li className=' hover:text-gray-500'>
              <a href="#">Works</a>
            </li>
            <li className=' hover:text-gray-500'>
              <a href="#">Contact us</a>
            </li>
          </ul>
          <img className=' hidden md:block w-5 cursor-pointer' src={moon} alt="moon" />
        </div>
      </nav>
    </div>
  );
}

export default App;
