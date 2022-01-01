import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import * as styles from "./portfolio.module.scss"

const Portfolio = () => {

    const ImageData = useStaticQuery(graphql`
        query {
            eastCoast: file(relativePath: { eq: "east-coast-family-resturant.png" }) {
                childImageSharp {
                    id
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            bensBespoke: file(relativePath: { eq: "bens-bespoke.png" }) {
                childImageSharp {
                    id
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            hideawayBeauty: file(relativePath: { eq: "the-hideaway-beauty-cabin.png" }) {
                childImageSharp {
                    id
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <div className={styles.portfolio} id="portfolio">
            <h2>Portfolio</h2>

            <div className={styles.portfolio__item}>
                <div className={styles.portfolio__item__image}>
                    <Img 
                        fluid={ImageData.eastCoast.childImageSharp.fluid}
                        alt={ImageData.eastCoast.childImageSharp.id}
                    />
                </div>

                <div className={styles.portfolio__item__text}>
                    <h3>East Coast Family Restaurant</h3>
                    <p>This project was a modernisation and refresh of an old website. The website was designed to match current business branding and focused on providing information to customers.</p>
                </div>
            </div>

            <div className={styles.portfolio__item}>
                <div className={styles.portfolio__item__image}>
                    <Img 
                        fluid={ImageData.bensBespoke.childImageSharp.fluid}
                        alt={ImageData.bensBespoke.childImageSharp.id}
                    />
                </div>

                <div className={styles.portfolio__item__text}>
                    <h3>Ben’s bespoke furniture and joinery</h3>
                    <p>Ben wanted to increase his online presence and create a portfolio, we developed a website that both showcases his work and allows potential clients to easily connect with him.</p>
                </div>
            </div>

            <div className={styles.portfolio__item}>
                <div className={styles.portfolio__item__image}>
                    <Img 
                        fluid={ImageData.hideawayBeauty.childImageSharp.fluid}
                        alt={ImageData.hideawayBeauty.childImageSharp.id}
                    />
                </div>

                <div className={styles.portfolio__item__text}>
                    <h3>The Hideaway Beauty Cabin</h3>
                    <p>We designed and developed a custom WordPress theme to allow our client to easily manage and update their website.</p>
                </div>
            </div>

        </div>
    )
}

export default Portfolio