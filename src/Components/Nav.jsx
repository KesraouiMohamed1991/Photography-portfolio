import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const navlinks = [
    {
      name: 'About 🏠',
      link: '/',
    },
    {
      name: 'Gallery 📁 ',
      link: '/project',
    },
    {
      name: 'Contact 📞',
      link: '/contact',
    },
  ];

  const [show, setShow] = useState(false);

  const toggleNav = () => {
    setShow(!show);
  };

  return (
    <nav className="h-24 w-5/6 absolute inset-0 sm:w-5/6 mx-auto flex justify-between items-center">
      <div className="w-1/3">
        <p className="font-custom2 text-xs sm:text-lg hover:font-bold ">Kersaoui Moha 👋🏻 </p>
      </div>

      <div className="w-2/3 flex justify-end gap-5 ">
        {navlinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.link}
            className={({ isActive }) => `${isActive ? " bg-background text-text border-2 border-text  " : "text-background bg-text"} text-sm  sm:flex justify-center items-center   rounded-3xl md:px-6 px-8 py-3  font-custom border-2   ${show ? 'flex' : 'hidden'}`}

          >
            {link.name}
          </NavLink>
        ))}

        <div className="sm:hidden z-30" onClick={toggleNav}>
          {show ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          )}
        </div>
      </div>

      {show && (
        <div className="sm:hidden fixed inset-0 p-8 bg-gradient-to-r from-rose-50 to-lime-50 z-20">
          <div className="flex flex-col items-center justify-center gap-20 h-full">
            {navlinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.link}
                className="text-sm sm:text-md text-background bg-text rounded-3xl px-6 py-2 font-custom mb-4"
                onClick={toggleNav}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
