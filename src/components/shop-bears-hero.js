import * as React from "react"
import { graphql } from "gatsby"
import { Container, Section, SuperHeading } from "./ui"

import * as shopBearsHeroStyles from "./shop-bears-hero.module.css"


export default function ShopbearspageHero(props) {
  return (
    <Section>
      <Container width="wide" className={shopBearsHeroStyles.shopbearsherobg}>
        <SuperHeading className={shopBearsHeroStyles.shopbearsheroheader}>
          {props.heading}
        </SuperHeading>
        </Container>
    </Section>
  )
}

export const query = graphql`
  fragment ShopbearspageHeroContent on ShopbearspageHero {
    id
    heading
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
