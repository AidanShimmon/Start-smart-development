import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import * as styles from "./about.module.scss"

const About = () => {

    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "about-us-image.png" }) {
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
        <div className={styles.about} id="about">
            <div className={styles.about__text}>
                <h2>
                    About us
                </h2>

                <h3>
                    We focus on delivering&nbsp;
                    <span><span data-sal="slide-right" data-sal-delay="0"></span>modern</span>,&nbsp;<span><span data-sal="slide-right" data-sal-delay="400"></span>fast</span>,&nbsp;
                    <span><span data-sal="slide-right" data-sal-delay="800"></span>secure</span> and&nbsp; 
                    <span><span data-sal="slide-right" data-sal-delay="1000"></span>effective</span> websites.
                </h3>

                <p>
                    Each project is approached as a unique problem to solve. During our discovery phase we will discuss your requirements and business so we can develop a solution to specifically match your values, requirements and style.
                </p>
            </div>

            <div className={styles.about__image}>
                <Img 
                    fluid={data.file.childImageSharp.fluid}
                    alt={data.file.childImageSharp.id}
                />
            </div>
        </div>
    )
} 

export default About