import React from "react"
import Button from "../../global/button/button"

// SVGs
import StaticWebsitesSvg from "../../../assets/svgs/Static-websites.inline.svg"
import WordpressDevelopmentSvg from "../../../assets/svgs/Wordpress-development.inline.svg"
import ShopifyDevelopmentSvg from "../../../assets/svgs/Shopify-development.inline.svg"
import FullyResponsiveSvg from "../../../assets/svgs/Fully-responsive.inline.svg"
import SeoSvg from "../../../assets/svgs/SEO.inline.svg"
import HandCodedSvg from "../../../assets/svgs/Hand-coded.inline.svg"

import * as styles from "./services.module.scss"

const Services = () => {
    return (
        <div className={styles.services} id="services">
            <h2>Our services</h2>

            <div className={styles.service__wrap}>
                <div className={styles.service}>
                    <div
                        data-sal="flip-right"
                        data-sal-duration="400" 
                        data-sal-delay="100" 
                        className={styles.service__image}
                    >
                        <StaticWebsitesSvg />
                    </div>
                    
                    <h3>
                        Static<br/>
                        websites
                    </h3>
                </div>

                <div className={styles.service}>
                    <div 
                        data-sal="flip-right"
                        data-sal-duration="400" 
                        data-sal-delay="200" 
                        className={styles.service__image}
                    >
                        <WordpressDevelopmentSvg />
                    </div>

                    <h3>
                        WordPress<br />
                        Development
                    </h3>
                </div>

                <div className={styles.service}>
                    <div 
                        data-sal="flip-right"
                        data-sal-duration="400" 
                        data-sal-delay="300"
                        className={styles.service__image}
                    >
                        <ShopifyDevelopmentSvg />
                    </div>

                    <h3>
                        Shopify<br />
                        Development
                    </h3>
                </div>

                <div className={styles.service}>
                    <div 
                        data-sal="flip-right"
                        data-sal-duration="400" 
                        data-sal-delay="400" 
                        className={styles.service__image}
                    >
                        <FullyResponsiveSvg />
                    </div>

                    <h3>
                        Fully<br />
                        responsive
                    </h3>
                </div>

                <div className={styles.service}>
                    <div 
                        data-sal="flip-right"
                        data-sal-duration="400" 
                        data-sal-delay="200" 
                        className={styles.service__image}
                    >
                        <SeoSvg />
                    </div>

                    <h3>
                        Search engine<br />
                        optimised
                    </h3>
                </div>

                <div className={styles.service}>
                    <div 
                        data-sal="flip-right"
                        data-sal-duration="400" 
                        data-sal-delay="300"
                        className={styles.service__image}
                    >
                        <HandCodedSvg />
                    </div>

                    <h3>
                        Hand<br />
                        coded
                    </h3>
                </div>
            </div>

            <div>
                <h3>
                    Can’t find what you’re looking for?<br />
                    Don’t hesitate to get in touch!
                </h3>
                <Button text="Contact us" link="mailto:startsmartdev@gmail.com" />
            </div>
        </div>
    )
}

export default Services