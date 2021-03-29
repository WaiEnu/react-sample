import React from 'react';
import LayoutLg from '../organisms/LayoutLg'

type Props = {
  title?: string
}
const Board: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}) => {

  return (
  <LayoutLg title={title}>
      <div className="p-4 w-full h-full bg-gray-200 dark:bg-gray-800 dark:text-gray-200 rounded-lg overflow-hidden text-left relative">
        {children}
      </div>
  </LayoutLg>
  );
}

export default Board;