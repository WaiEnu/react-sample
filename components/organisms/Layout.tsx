import * as React from 'react'
import Nav from '../atoms/Nav'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div className="bg-gray-400 dark:bg-black p-0 m-0 w-full h-full">
    <Nav title={title} />
    <div className="container mx-auto pt-12 h-screen">
      <section className="text-gray-700 h-full body-font">
        <div className="container px-5 h-full py-12 mx-auto">
          {children}
        </div>
      </section>
    </div>
  </div>
)

export default Layout
