import React from "react"
import Layout from "../components/global/layout/layout"
import Hero from "../components/local/hero/hero"
import About from "../components/local/about/about"
import Services from "../components/local/services/services"
import Portfolio from "../components/local/portfolio/portfolio"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Services />
    <Portfolio />
  </Layout>
)

export default IndexPage