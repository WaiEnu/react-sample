import React from 'react';
import Layout from '../components/Layout'

type Props = {
  title?: string
}
const Menu: React.FC<Props> = ({
  children,
  title = 'This is the default title',
}) => {

  return (
  <Layout title={title}>
    <div className="flex flex-wrap -m-4">
      {children}
    </div>
  </Layout>
  );
}

export default Menu;