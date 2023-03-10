import * as React from "react"
import { graphql } from "gatsby"
import { Container, Section, Text, SuperHeading } from "./ui"
import * as styles from "./about-hero.css"

export default function ShoppageBanner(props) {
  return (
    <Section>
      <Container>
        <SuperHeading className={styles.aboutHeroHeader}>
          {props.heading}
        </SuperHeading>
        {props.text && (
          <Text className={styles.aboutHeroText}>{props.text}</Text>
        )}
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment ShoppageBannerContent on ShoppageBanner {
    id
    heading
    text

  }
`
