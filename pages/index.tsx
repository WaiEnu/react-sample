import * as React from 'react'
import Card from '../components/atoms/Card'
import Menu from '../components/templates/Menu'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
  <Menu title="Home | Next.js + TypeScript Example">
    <Card
      href="/canvas"
      category="CATEGORY"
      title="Canvas"
      discription="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    ></Card>
    <Card
      href="/garally"
      category="CATEGORY"
      title="garally"
      discription="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    ></Card>
    <Card
      href="/darken"
      category="CATEGORY"
      title="darken"
      discription="hoto booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    ></Card>
    <Card
      href="/watch"
      category="CATEGORY"
      title="watch"
      discription="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
    ></Card>
  </Menu>
  )
}

export default IndexPage
