import React from "react"
import HeroSvg from "../../../assets/svgs/hero.inline.svg"
import Button from "../../global/button/button"

import * as styles from "./hero.module.scss"

const Hero = () => {
    return(
        <div className={styles.hero}>
            <div className={styles.hero__top}>
                <div className={styles.hero__top__text}>
                    <h1>
                        Start<br/>
                        Smart<br/>
                        Development
                    </h1>
                    <p>Beskpoke mobile friendly websites tailored to fit your requirements.</p>
                </div>

                <div className={styles.hero__top__img}>
                    <HeroSvg />
                </div>
            </div>

            <div className={styles.hero__buttons}>
                <Button text="Get started" link="#contact" />
                <Button text="Find out more" link="#about" />
            </div>
        </div>
    )
}

export default Hero