import React from 'react';

function Header() {
  return (
    <header className='flex justify-center'>
      <div className='container flex justify-between mx-auto px-6 py-6 '>
        <h1 className='font-bold text-xl'>YUNA🌕 Portfolio</h1>
        <ul className='flex gap-4'>
          <li>
            <a className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
          </li>
          <li>
            <a className='text-gray-400 hover:text-white cursor-pointer'>Skill</a>
          </li>
          <li>
            <a className='text-gray-400 hover:text-white cursor-pointer'>About me</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;