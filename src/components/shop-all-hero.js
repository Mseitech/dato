import * as React from "react"
import { graphql } from "gatsby"
import { Container, Section, SuperHeading } from "./ui"

import * as shopAllHeroStyles from "./shop-all-hero.module.css"


export default function ShopallpageHero(props) {
  return (
    <Section>
      <Container width="wide" className={shopAllHeroStyles.shopallherobg}>
        <SuperHeading className={shopAllHeroStyles.shopallheroheader}>
          {props.heading}
        </SuperHeading>
        </Container>
    </Section>
  )
}

export const query = graphql`
  fragment ShopallpageHeroContent on ShopallpageHero {
    id
    heading
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
