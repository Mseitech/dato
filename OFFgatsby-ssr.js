import * as React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script type="text/javascript" src="/buy-button.js" key="buy-button-js" defer></script>,
  ])
}