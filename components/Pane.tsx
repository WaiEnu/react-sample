import React from 'react';
import Layout from '../components/Layout'

type Props = {
  title?: string
}
const Pane: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}) => {

  return (
  <Layout title={title}>
      <div className="p-4 w-full h-full bg-gray-200 rounded-lg overflow-hidden text-left relative">
        {children}
      </div>
  </Layout>
  );
}

export default Pane;