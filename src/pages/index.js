import React from "react"
import Layout from "../components/global/layout/layout"
import Hero from "../components/local/hero/hero"
import About from "../components/local/about/about"
import Services from "../components/local/services/services"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Services />
  </Layout>
)

export default IndexPage