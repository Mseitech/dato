import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import ShopallBears from "../components/shop-all-bears"

export default function Shopbears(props) {
  const { shopbearspage } = props.data

  return (
    <Layout>
      {shopbearspage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
      <ShopallBears />
    </Layout>
  )
}
export const Head = (props) => {
  const { shopbearspage } = props.data
  return <SEOHead {...shopbearspage} />
}
export const query = graphql`
  {
    shopbearspage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...ShopbearspageHeroContent
      }
    }
  }
`
