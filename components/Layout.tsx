/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export interface LayoutProps {
  children?: React.ReactNode;
  title?:String
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'React' }) => {

  return (
    <div>
      <nav className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <a className="text-white no-underline hover:text-white hover:no-underline" href="/">
              <span className="text-2xl pl-2"> {title}</span>
            </a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-24 md:mt-16 h-screen">
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
              {children}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Layout;
