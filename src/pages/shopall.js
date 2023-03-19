import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import ShopallpageAllproducts from "../components/shop-all-allproducts"
import { Script } from "gatsby"

/*const scripts = {
  myLocalScript: `/buy-button.js`,
}*/

export default function Shopall(props) {
  const { shopallpage } = props.data

  return (
    <Layout>
      {shopallpage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
      <Script src="https://gatsbydatoanimalsshop.s3.eu-north-1.amazonaws.com/buy-button.js" strategy="idle"/>
      <ShopallpageAllproducts />
    </Layout>
  )
}
export const Head = (props) => {
  const { shopallpage } = props.data
  return <SEOHead {...shopallpage} />
}
export const query = graphql`
  {
    shopallpage {
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
        ...ShopallpageHeroContent
      }
    }
  }
`
