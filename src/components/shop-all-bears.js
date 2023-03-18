import * as React from "react"
/*import { graphql } from "gatsby"*/
import { Container, Section } from "./ui"
import { Script } from "gatsby"


const scripts = {
  myLocalScript: `/buy-button-bears.js`,
}


export default function ShopallBears() {
  return (
    <Section>
      <Container>
      <Script src={scripts.myLocalScript} />
      <div id='collection-component-1679164075746'></div>
      </Container>
    </Section>
  )
}