import * as React from "react"
import { graphql } from "gatsby"
import { Container, Section, SuperHeading } from "./ui"

import * as shopUnicornsHeroStyles from "./shop-unicorns-hero.module.css"


export default function ShopunicornspageHero(props) {
  return (
    <Section>
      <Container width="wide" className={shopUnicornsHeroStyles.shopunicornsherobg}>
        <SuperHeading className={shopUnicornsHeroStyles.shopunicornsheroheader}>
          {props.heading}
        </SuperHeading>
        </Container>
    </Section>
  )
}

export const query = graphql`
  fragment ShopunicornspageHeroContent on ShopunicornspageHero {
    id
    heading
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
