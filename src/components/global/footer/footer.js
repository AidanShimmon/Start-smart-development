import React from "react"
import { Link } from 'gatsby'
import Button from "../button/button"
import Instagram from "../../../assets/svgs/instagram-logo.inline.svg"

import * as styles from "./footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.footer__content__row}>
                    <div className={styles.footer__content__column}>
                        <h3>Quick links</h3>
                        <ul>
                            <li>
                                <Link href="#home">Home</Link>
                            </li>
                            <li>
                                <Link href="#about">About</Link>
                            </li>
                            <li>
                                <Link href="#services">Services</Link>
                            </li>
                            <li>
                                <Link href="#contact">Contact us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footer__content__column}>
                        <h3>Legal</h3>
                        <ul>
                            <li>
                                <Link href="terms-conditions">Terms & conditions</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footer__content__column}>
                        <h3>Social</h3>
                        <ul>
                            <li>
                                <Link>
                                    <Instagram/>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footer__content__column}>
                        <h3>Contact us</h3>
                        <Button
                            text="Let's have a chat"
                            link="#contact"
                        />
                    </div>
                </div>
                <p>Copyright 2021 StartSmartDevelopment. All rights reserved</p>
            </div>
        </footer>
    )
}
export default Footer