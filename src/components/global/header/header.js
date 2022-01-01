import React from "react"
import Logo from "../../../assets/svgs/Logo.inline.svg"
import { Link } from 'gatsby'
import Button from "../button/button"

import * as styles from "./header.module.scss"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__nav}>
                <div className={styles.header__nav__logo}>
                    <Logo/>
                </div> 
                
                <div>
                    <Link href="#home">Home</Link>
                    <Link href="#about">About</Link>
                    <Link href="#services">Services</Link>
                    <Button
                        text="Get started"
                        link="#contact"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header; 