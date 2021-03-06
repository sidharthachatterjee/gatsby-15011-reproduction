import { Router } from "@reach/router"
import React from "react"

const Index = () => <h1>App Page</h1>

const NotFound = () => <h1>Not Found in App</h1>

const IndexPage = () => (
  <Router>
    <Index path="/" />
    <NotFound default />
  </Router>
)

export default IndexPage
