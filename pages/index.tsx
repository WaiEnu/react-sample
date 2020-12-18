import * as React from 'react'
import Card from '../components/Card'
import Menu from '../components/Menu'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
  <Menu title="Home | Next.js + TypeScript Example">
    <Card
      href="/about"
      category="CATEGORY"
      title="About"
      discription="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    ></Card>
    <Card
      href="/profile"
      category="CATEGORY"
      title="profile"
      discription="hoto booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    ></Card>
    <Card
      href="/works"
      category="CATEGORY"
      title="works"
      discription="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    ></Card>
    <Card
      href="/garally"
      category="CATEGORY"
      title="garally"
      discription="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    ></Card>
  </Menu>
  )
}

export default IndexPage
