import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
// import { AuthContext } from 'context/authContext';
// import useMe from 'hooks/useMe';

const NavWrapper = tw.div`flex justify-around items-center py-4 px-6 text-gray-300 border-b-2 border-gray-600`;
const ButtonWrap = tw.button`block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900`;
// const DropDown = styled.div`
//   ${tw`transition ease-out duration-300 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg`}
//   ${({ isOpen }) => isOpen && tw`hidden`}
// `;

const Navbar = () => {
  const { user, logout } = useContext();
  const [isOpen, setIsOpen] = useState(true);
  // const { data } = useMe();

  const AuthLinks = (
    <div className='flex'>
      <Link to='/login'>
        <span className='rounded-md'>
          <button
            type='button'
            className='inline-flex justify-center w-full px-4 py-2 text-sm uppercase leading-5 font-medium text-gray-300 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150'
            id='options-menu'
            aria-haspopup='true'
            aria-expanded='true'
          >
            <div className='flex justify-center items-center'>LOGIN</div>
          </button>
        </span>
      </Link>
      <Link to='/signup'>
        <span className='rounded-md'>
          <button
            type='button'
            className='border rounded-md hover:bg-gray-700 inline-flex justify-center w-full px-4 py-2 text-sm uppercase leading-5 font-medium text-gray-300 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150'
            id='options-menu'
            aria-haspopup='true'
            aria-expanded='true'
          >
            <div className='flex justify-center items-center'>SIGN UP</div>
          </button>
        </span>
      </Link>
    </div>
  );

  return (
    <NavWrapper>
      <Link to='/' className='tracking-widest font-bold select-none'>
        DDTOURS
      </Link>
      <div>
        <img
          className='h-10 w-10'
          src={require('https://prunedge.com/wp-content/uploads/2022/03/web.png') }
          alt='icon'
        />
      </div>
      <div className='relative inline-block text-left'>
        {user ? (
          <div onClick={() => setIsOpen(!isOpen)}>
            <span className='rounded-md'>
              <button
                type='button'
                className='inline-flex justify-center w-full px-4 py-2 text-sm uppercase leading-5 font-medium text-gray-300 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150'
                id='options-menu'
                aria-haspopup='true'
                aria-expanded='true'
              >
                <div className='flex justify-center items-center'>
                  <img
                    className='mr-2 h-6 w-6'
                    src='https://robohash.org/ddd?set=set4'
                    alt='DP'
                  />
                  <p>data name</p>
                  <svg
                    className='-mr-1 ml-2 h-5 w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
              </button>
            </span>
          </div>
        ) : (
          AuthLinks
        )}
        <div
        
        className={` ${tw`transition ease-out z-40 duration-300 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg`}
        ${({ isOpen }) => isOpen && tw`hidden`}`}

        
        isOpen={isOpen}>
          <div className='rounded-md bg-white shadow-xs'>
            <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'
            >
              <ButtonWrap role='menuitem'>Account settings</ButtonWrap>
              <form>
                <ButtonWrap onClick={logout} type='submit' role='menuitem'>
                  Sign out
                </ButtonWrap>
              </form>
            </div>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;