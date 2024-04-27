import { Link } from "react-router-dom";
const Navbar = () => {
  //Responsive Menu JS Toggle Logic
  return (
    <>
      <nav className="bg-white py-2.5 text-black">
        <div className="mx-auto flex max-w-[1920px] flex-wrap items-center justify-between px-4">
          {/* Navbar Start - Logo */}
          <Link to="/">
            <p className="self-center text-xl font-semibold text-black lg:text-2xl">
              <span className="text-purple-800">W</span>eb Ex Machin<span className="text-purple-800">a</span>
            </p>
          </Link>
          {/* Responsive hidden hamburguer menu*/}
          <button type="button" className="rounded-full bg-purple-50 p-3 text-gray-500 md:hidden">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>

          {/* Middle Menu List*/}
          <div className="w-full font-sans md:flex md:w-auto">
            <ul className="text-md mt-2 flex flex-col items-center gap-3 md:mt-0 md:flex-row md:gap-0 md:space-x-8 lg:text-lg ">
              {/* Responsive Search bar */}
              <li className="md:hidden">
                <div className="relative text-gray-600">
                  <input type="search" name="serch" placeholder="Search" className=" text-md h-10 rounded-full bg-purple-50 pl-6  pr-12 focus:outline-none"></input>
                  <button type="submit" className="absolute right-0 top-0 mr-4 mt-3">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
              </li>
              <li>
                <Link to="/" className="py-2 pl-3 pr-4 md:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="py-2 pl-3 pr-4 md:p-0">
                  About
                </Link>
              </li>
              <li>
                <Link to="/javascript" className="pr-4md:p-0 py-2 pl-3">
                  Javascript
                </Link>
              </li>
              <li>
                <Link to="/contact" className="mx-auto py-2 pl-3 pr-4 md:p-0">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/*End Search Bar */}
          <div className="relative hidden text-gray-600 md:inline-block">
            <input type="search" name="serch" placeholder="Search" className="text-md h-10 rounded-full bg-purple-50  pl-3 pr-7 focus:outline-none"></input>
            <button type="submit" className="absolute right-0 top-0 mr-2 mt-3">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
