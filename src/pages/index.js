import React from "react"
import Layout from "../components/global/layout/layout"
import Hero from "../components/local/hero/hero"
import About from "../components/local/about/about"


const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
  </Layout>
)

export default IndexPage