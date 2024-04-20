const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-100 py-2.5">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
          <a href="#" className="flex items-center">
            {/* Logo */}
            <span className="self-center text-xl font-semibold">Landwind</span>
          </a>
          {/* Responsive hidden menu button */}
          <button type="button" className="text-gray-500 sm:hidden">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
          {/* Menu List*/}
          <div className="w-full sm:flex sm:w-auto">
            <ul className="mt-4 flex flex-col items-center text-sm sm:mt-0 sm:flex-row sm:space-x-8">
              <li>
                <a href="#" className="py-2 pl-3 pr-4 text-gray-700 sm:p-0">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="py-2 pl-3 pr-4 text-gray-700 sm:p-0">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="py-2 pl-3 pr-4 text-gray-700 sm:p-0">
                  Javascript
                </a>
              </li>
              <li>
                <a href="#" className="py-2 pl-3 pr-4 text-gray-700 sm:p-0">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Search Bar */}
          <div className="relative text-gray-600">
            <input type="search" name="serch" placeholder="Search" className="h-10 rounded-full bg-white px-5 pr-10 text-sm focus:outline-none"></input>
            <button type="submit" className="absolute right-0 top-0 mr-4 mt-3">
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
