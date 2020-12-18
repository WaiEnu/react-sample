/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export interface LayoutProps {
  title: String;
  discription: String;
  category: String;
}

const Card: React.FC<LayoutProps> = ({ title, discription, category }) => {

  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full bg-gray-200 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{ category }</h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{title}</h1>
        <p className="leading-relaxed mb-3">{ discription }</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Card;
