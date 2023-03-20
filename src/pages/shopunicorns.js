import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import ShopallUnicorns from "../components/shop-all-unicorns"
import { Script } from "gatsby"

const scripts = {
  myLocalScript: `/buy-button-bears.js`,
}

export default function Shopunicorns(props) {
  const { shopunicornspage } = props.data

  return (
    <Layout>
      {shopunicornspage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
      <Script src={scripts.myLocalScript} />
      <ShopallUnicorns />
    </Layout>
  )
}
export const Head = (props) => {
  const { shopbearspage } = props.data
  return <SEOHead {...shopbearspage} />
}
export const query = graphql`
  {
    shopunicornspage {
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
        ...ShopunicornspageHeroContent
      }
    }
  }
`
