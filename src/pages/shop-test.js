import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function Shop(props) {
  const { shopPage } = props.data

  return (
    <Layout>
      {shopPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}
export const Head = (props) => {
  const { shopPage } = props.data
  return <SEOHead {...shopPage} />
}
export const query = graphql`
  {
    shopPage {
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
        ...ShoppageBannerContent
      }
    }
  }
`
