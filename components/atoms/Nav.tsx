/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

type Props = {
  title?: string
}

const Nav: React.FC<Props> = ({
  title = 'This is the default title',
}) => {

  return (
  <nav className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
    <div className="container mx-auto flex flex-wrap items-center">
    <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
      <a className="text-white no-underline hover:text-white hover:no-underline" href="/">
        <span className="text-2xl pl-2">{ title }</span>
      </a>
    </div>
    </div>
  </nav>
  );
}

export default Nav;